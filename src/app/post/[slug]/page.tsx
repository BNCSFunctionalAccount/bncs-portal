import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Container from '~/components/Container'
import { SlugSection } from '~/components/SlugSection'
import { getClient } from '~/lib/sanity.client'
import { getPost, Post, postSlugsQuery } from '~/lib/sanity.queries'

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
      <Container>
        <SlugSection staticPost={staticPost} />
      </Container>
    )
  },
  {
    returnTo({ params }) {
      return `/post/${params?.slug}`
    },
  },
)
