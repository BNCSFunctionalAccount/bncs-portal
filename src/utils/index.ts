import { getClient } from '~/lib/sanity.client'
import { getPosts } from '~/lib/sanity.queries'

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export async function getStaticPosts() {
  const client = getClient()
  const posts = await getPosts(client)

  return posts
}
