'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useLiveQuery } from 'next-sanity/preview';

import { sans, serif } from '~/assets/fonts';
import { Post, postBySlugQuery } from '~/lib/sanity.queries';
import { formatDateUK } from '~/utils';

import { ReleaseNotes } from './sub-components/release-notes';

interface ISlugSectionProps {
  staticPost: Post;
}

export const SlugSection: FC<ISlugSectionProps> = ({ staticPost }) => {
  const [post] = useLiveQuery(staticPost, postBySlugQuery, {
    slug: staticPost.slug.current,
  });

  return (
    <section className="flex h-full w-full gap-8">
      <div className="flex-1 flex flex-col gap-4">
        <Link
          className="rounded-lg bg-deepBlue min-w-44 text-center hover:bg-opacity-75 text-white
            py-2 px-4 hover:text-evidenOrange hover:font-bold transition-all ease-in-out duration-150 flex items-center justify-center  h-11 w-[170px]"
          href={'/drivers'}
          title="Drivers"
        >
          Back
        </Link>
        <h1 className={`${sans.className} text-4xl font-extrabold mb-4`}>
          {post.title}
        </h1>
        <div className="h-fit px-3 border-l-4 border-evidenOrange pl-4 hover:pl-3 hover:border-l-8 transition-all duration-100">
          <div className="bg-lightGray p-2 rounded my-5 hover:bg-opacity-95">
            <p className={`${serif.className} text-xl mt-0 min-h-24 py-1`}>
              {post.longDescription}
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-deepBlue my-4" />
        <div className="min-h-24 w-full">
          <h2>Version History</h2>
          <ReleaseNotes post={post} />
        </div>
      </div>
      <div className="w-64 bg-gray-100 p-4 flex flex-col gap-4 border-l border-gray-300 mt-[153px] h-[635px]">
        <button className="bg-gray-500 text-gray-300 border-none px-5 py-2.5 cursor-not-allowed rounded-lg h-11 w-44">
          Download
        </button>
        {post.version && (
          <div className={`${sans.className} text-black-500`}>
            Version: {post.version}
          </div>
        )}
        {post.releaseDate && (
          <div className={`${sans.className} text-gray-500`}>
            Release Date: {formatDateUK(post.releaseDate.toString())}
          </div>
        )}
        <Link
          href={'/readme'}
          className="text-blue-500 hover:text-blue-700 transition-all duration-150"
          title="ReadMe"
        >
          Read the ReadMe
        </Link>
      </div>
    </section>
  );
};
