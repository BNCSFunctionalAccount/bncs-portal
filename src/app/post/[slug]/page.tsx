import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Image from 'next/image'

import { Sidebar } from '~/components/Sidebar'
import { SlugSection } from '~/components/slug-section'
import { getClient } from '~/lib/sanity.client'
import { getPost, Post, postSlugsQuery } from '~/lib/sanity.queries'

import logo from '../../../assets/logo.png'

export const dynamicParams = true

export async function generateStaticParams() {
  const client = getClient()
  const slugs = await client.fetch(postSlugsQuery)

  return slugs?.map(({ slug }) => `/post/${slug}`) || []
}

async function getStaticProps(params) {
  const client = getClient()
  const post = await getPost(client, params.slug)

  if (!post) {
    const emptyPost: Post = {
      _type: 'post',
      _id: '',
      _createdAt: '',
      binaryName: '',
      slug: {
        current: '',
        _type: 'slug',
      },
      type: '',
      version: '',
      lastSupportedBNCS: '',
      description: '',
      readMe: false,
      size: 0,
      releaseNotes: [],
      releaseDate: [],
      organisationWithLicense: [],
      roles: [],
      viewers: [],
      deviceManufacturer: [],
      url: '',
      commerciallyAvailable: false,
    }
    return emptyPost
  }

  return post
}

export default withPageAuthRequired(
  async function ProjectSlugRoute({ params }) {
    const staticPost = await getStaticProps(params)

    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="absolute right-6 top-10">
          <Image src={logo} alt="Eviden Logo" width={175} height={100} />
        </div>
        <div className="ml-72 px-5 mt-24 w-[calc(100%-260px)]">
          <SlugSection staticPost={staticPost} />
        </div>
      </div>
    )
  },
  {
    returnTo({ params }) {
      return `/post/${params?.slug}`
    },
  },
)
