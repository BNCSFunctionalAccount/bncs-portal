'use client'

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { useLiveQuery } from 'next-sanity/preview'
import { FC } from 'react'

import { sans, serif } from '~/assets/fonts'
import { urlForImage } from '~/lib/sanity.image'
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
    <section className="w-full mt-1 mx-0 mb-4">
      {post.mainImage ? (
        <Image
          src={urlForImage(post.mainImage)?.url() || ''}
          height={231}
          width={367}
          alt=""
          priority
        />
      ) : (
        <div className="w-full h-[200px] object-cover bg-gray-300" />
      )}
      <div className="h-8 bg-deepBlue w-full" />
      <div className="my-5 mx-0 border-b-2 border-lightGray p-2 flex justify-between">
        <h1 className={`${sans.className} text-4xl font-extrabold`}>
          {post.title}
        </h1>
        <Link
          className="rounded-lg bg-deepBlue min-w-44 text-center hover:bg-opacity-75 text-white
            py-2 px-4 hover:text-evidenOrange hover:font-bold transition-all ease-in-out duration-150"
          href={'/dashboard/'}
          title="Dashboard"
        >
          Back to Table
        </Link>
      </div>
      <div className="py-0 px-3 border-l-4 border-evidenOrange pl-4 hover:pl-3 hover:border-l-8 transition-all duration-100">
        <div className="bg-lightGray p-2 rounded my-5 hover:bg-opacity-95">
          <p
            className={`${sans.className} font-semibold text-sm text-gray-500`}
          >
            {formatDate(post._createdAt)}
          </p>
          <p className={`${serif.className} text-2xl mt-0 min-h-24 py-1`}>
            {post.description}
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
    </section>
  )
}
