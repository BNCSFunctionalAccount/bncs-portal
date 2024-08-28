import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';
import { readToken } from '~/lib/sanity.api';
import { getClient } from '~/lib/sanity.client';
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries';
import type { SharedPageProps } from '~/pages/_app';
import styles from '../styles/dashboard.module.css';
import Sidebar from '~/components/sidebar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

// Function to check if user has access to download for a specific driver
const userCanDownload = (userRoles: string[], driverRoles: string[]): boolean => {
  return userRoles.some(role => driverRoles.includes(role));
};

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const posts = await getPosts(client);

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  };
};

const IndexPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery);
  const { user, isLoading, error } = useUser();
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('All'); // Filter state

  useEffect(() => {
    if (user && user["https://localhost:3000/roles"]) {
      const roles = user["https://localhost:3000/roles"] as string[];
      setUserRoles(roles);
    }
  }, [user]);

  const filteredPosts = posts.filter(post => {
    const isLicensed = userCanDownload(userRoles, post.roles);
    if (filter === 'Licensed') return isLicensed;
    if (filter === 'Not Licensed') return !isLicensed;
    return true; // 'All' case
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.dashboard}>
      <Head>
        <title>Drivers</title>
      </Head>
    
      <Sidebar />
      <div className={styles.content}>
      
        <div className={styles.filterContainer}>
          <label htmlFor="filter">License: </label>
          <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Licensed">Licensed</option>
            <option value="Not Licensed">Not Licensed</option>
          </select>
        </div>
        <section>
          {filteredPosts.length ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: '250px'}}>Title</th>
                  <th style={{ width: '100px'}}>Version</th>
                  <th style={{ width: '550px' }}>Description</th>
                  <th style={{ width: '70px' }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.version}</td>
                    <td>{post.description}</td>
                    <td>{userCanDownload(userRoles, post.roles) ? 'Licensed' : 'Not Licensed'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No posts found</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default IndexPage;
