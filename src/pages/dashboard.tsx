import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import styles from '../styles/dashboard.module.css';
import Sidebar from '~/components/sidebar'
import Link from 'next/link'

// Function to check if user has access to download for a specific driver
const userCanDownload = (userRoles: string[], driverRoles: string[]): boolean => {
  return userRoles.some(role => driverRoles.includes(role));
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

const IndexPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)

  // Mocked user roles (replace with actual Auth0 user roles retrieval)
  const userRoles = ['BBC']; // Example roles

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <h2>Dashboard</h2>
        <section>
          {posts.length ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: '450px'}}>Title</th>
                  <th style={{ width: '150px' }}>Size</th>
                  
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post._id}>
                    <td >{post.title}</td>
                    <td>{post.size}</td>
                    
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
  )
}

export default IndexPage;

//headings
//<th>Version</th>
//<th>Date</th>
//<th>Download</th>
//<th>More info</th>


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