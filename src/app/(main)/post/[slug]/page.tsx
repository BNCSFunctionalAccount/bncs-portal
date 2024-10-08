import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { SlugSection } from '~/components/slug-section';
import { getClient } from '~/lib/sanity.client';
import { getPost, Post } from '~/lib/sanity.queries';

export const dynamicParams = true;

async function getStaticProps(params) {
  const client = getClient();
  const post = await getPost(client, params.slug);

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
      longDescription: '',
      readMe: false,
      releaseNotes: [],
      releaseDate: [],
      organisationWithLicense: [],
      roles: [],
      deviceManufacturer: [],
      url: '',
      commerciallyAvailable: false,
    };
    return emptyPost;
  }

  return post;
}

export default withPageAuthRequired(
  async function ProjectSlugRoute({ params }) {
    const staticPost = await getStaticProps(params);

    return (
      <div className="flex flex-col h-full gap-4">
        <SlugSection staticPost={staticPost} />
      </div>
    );
  },
  {
    returnTo({ params }) {
      return `/post/${params?.slug}`;
    },
  }
);
