import { getClient } from '~/lib/sanity.client'
import { getPosts } from '~/lib/sanity.queries'

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatDateUK(date: string) {
  const split = date.split('/').map((num) => parseInt(num))
  try {
    return formatDate(new Date(split[2], split[1], split[0]))
  } catch (error) {
    console.error(error)
    return formatDate(new Date())
  }
}

export async function getStaticPosts() {
  const client = getClient()
  const posts = await getPosts(client)

  return posts
}
