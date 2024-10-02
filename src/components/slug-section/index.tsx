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
    <section className="flex flex-col h-full gap-4 w-full">
      <div className="flex justify-between mr-52">
        <h1 className={`${sans.className} text-4xl font-extrabold`}>
          {post.title}
        </h1>
        
        <Link
          className="rounded-lg bg-deepBlue min-w-44 text-center hover:bg-opacity-75 text-white
            py-2 px-4 hover:text-evidenOrange hover:font-bold transition-all ease-in-out duration-150 flex items-center justify-center  h-11"
          href={'/drivers'}
          title="Drivers"
        >
          Back to Table
        </Link>
      </div>
      <div className="h-fit overflow-y-scroll px-3 border-l-4 border-evidenOrange pl-4 hover:pl-3 hover:border-l-8 transition-all duration-100">
        <div className="bg-lightGray p-2 rounded my-5 hover:bg-opacity-95">
          <p
            className={`${sans.className} font-semibold text-sm text-gray-500`}
          >
            {formatDate(post._createdAt)}
          </p>
          <p className={`${serif.className} text-xl mt-0 min-h-24 py-1`}>
            {post.longDescription}
          </p>
        </div>
        <div className="flex justify-between">
          <h2>Latest Release</h2>
          {post.releaseDate && (
            <div className="text-right align-bottom pt-2">
              {formatDateUK(post.releaseDate.toString())}
            </div>
          )}
        </div>
        <div className="min-h-24 w-full">
          <ReleaseNotes post={post} />
        </div>
        
      </div>
      <button className="bg-gray-500 text-gray-300 border-none px-5 py-2.5 cursor-not-allowed rounded-lg h-11 w-44">
        Download
      </button>

    </section>
  )
}
