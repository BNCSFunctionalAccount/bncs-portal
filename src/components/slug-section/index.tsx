'use client'

import Link from 'next/link'
import { useLiveQuery } from 'next-sanity/preview'
import { FC } from 'react'

import { sans, serif } from '~/assets/fonts'
import { Post, postBySlugQuery } from '~/lib/sanity.queries'
import { formatDate, formatDateUK } from '~/utils'

import { ReleaseNotes } from './sub-components/release-notes'

interface ISlugSectionProps {
  staticPost: Post
}

export const SlugSection: FC<ISlugSectionProps> = ({ staticPost }) => {
  const [post] = useLiveQuery(staticPost, postBySlugQuery, {
    slug: staticPost.slug.current,
  })

  console.log(post)

  return (
    <section className="flex h-full w-full gap-8"> {/* Flex container with gap between columns */}
  {/* Left Column */}
  <div className="flex-1 flex flex-col gap-4"> {/* flex-1 to take up remaining space */}
    {/* Title */}
    <h1 className={`${sans.className} text-4xl font-extrabold mb-4`}>
      {post.title}
    </h1>

    {/* Description Section */}
    <div className="h-fit overflow-y-scroll px-3 border-l-4 border-evidenOrange pl-4 hover:pl-3 hover:border-l-8 transition-all duration-100">
      <div className="bg-lightGray p-2 rounded my-5 hover:bg-opacity-95">
        <p className={`${sans.className} font-semibold text-sm text-gray-500`}>
          {formatDate(post._createdAt)}
        </p>
        <p className={`${serif.className} text-xl mt-0 min-h-24 py-1`}>
          {post.longDescription}
        </p>
      </div>
    </div>

    <hr className="border-t-2 border-evidenBlue my-4" />

    {/* Release Notes Section */}
    <div className="min-h-24 w-full">
      <h2>Version History</h2>
      <ReleaseNotes post={post} />
    </div>
  </div>

  {/* Right Column */}
  <div className="w-64 bg-gray-100 p-4 flex flex-col gap-4 border-l border-gray-300 mt-24 h-[500px] w-[210px]"> {/* Fixed width for right column */}
    {/* Download Button */}
    <button className="bg-gray-500 text-gray-300 border-none px-5 py-2.5 cursor-not-allowed rounded-lg h-11 w-44">
        Download
      </button>

    {/* Version Info */}
    {post.version && (
      <div className={`${sans.className} text-black-500`}>
        Version: {post.version}
      </div>
    )}

    {/* Release Date */}
    {post.releaseDate && (
      <div className={`${sans.className} text-gray-500`}>
        Release Date: {formatDateUK(post.releaseDate.toString())}
      </div>
    )}

    {/* ReadMe Link */}
    <Link
      href={'/readme'}
      className="text-blue-500 hover:text-blue-700 transition-all duration-150"
      title="ReadMe"
    >
      Read the ReadMe
    </Link>
  </div>
</section>

  )
}
