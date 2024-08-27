import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';
import Container from '~/components/Container';
import Welcome from '~/components/Welcome';
import { readToken } from '~/lib/sanity.api';
import { getClient } from '~/lib/sanity.client';
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries';
import type { SharedPageProps } from '~/pages/_app';
import styles from '../styles/dashboard.module.css';
import Sidebar from '~/components/sidebar';
import Link from 'next/link';
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

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //Here is where you see will the roles which is stored as an array of strings
  console.log(user["https://localhost:3000//roles"]);

  //this stores the roles but not sure if using a useEffect is necessary might want to reconsider
  useEffect(() => {
    const roles = user["https://localhost:3000//roles"] as string[];
    setUserRoles(roles);
  }, [user]); // Only run when `user` changes

  return (
    <div className={styles.dashboard}>
      <Head>
        <title>Drivers</title>
      </Head>
      <Sidebar />
      <div className={styles.content}>
        <h2>Dashboard</h2>
        <section>
          {posts.length ? (
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
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td >{post.title}</td>
                    <td >{post.version}</td>
                    <td>{post.description}</td>
                    {userCanDownload(userRoles, post.roles) ? (
                      <td>Licensed</td>
                    ) : (
                      <td>Not Licensed</td>
                    )}
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


//headings
//<th>Version</th>
//<th>Date</th>
//<th>Download</th>
//<th>More info</th>
//<th style={{ width: '150px' }}>Size</th>


//body
//<td>{post.version}</td>
//<td>{post._createdAt}</td>
//<td>
//{userCanDownload(userRoles, post.roles) && (
//  <Link href={post.url}>
//    <button>Download</button>
//  </Link>
//)}
//</td>
//<td>More Info</td>
//<td>{post.size}</td>