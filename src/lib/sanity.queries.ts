import type { PortableTextBlock } from '@portabletext/types'
import type { Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { Url } from 'next/dist/shared/lib/router/router'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  binaryName?: string
  slug: Slug
  type?: string
  version?: string
  lastSupportedBNCS?: string
  description?: string
  longDescription?: string
  readMe?: boolean
  releaseNotes: PortableTextBlock[]
  releaseDate: PortableTextBlock[]
  organisationWithLicense: Array<object>
  roles: Array<string>
  commerciallyAvailable: boolean
  deviceManufacturer: Array<string>
  url: Url
}
