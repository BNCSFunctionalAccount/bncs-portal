'use client'

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'
import { FC } from 'react'

import { sans, serif } from '~/assets/fonts'
import { urlForImage } from '~/lib/sanity.image'
import { Post, postBySlugQuery } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'
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
        <div className="w-full h-[200px] object-cover bg-black" />
      )}
      <div className="py-0 px-3">
        <h1 className={`${sans.className} text-4xl my-5 mx-0 font-extrabold`}>
          {post.title}
        </h1>
        <p className={`${sans.className} font-semibold text-sm mt-5`}>
          {formatDate(post._createdAt)}
        </p>
        <p className={`${serif.className} text-2xl mt-0 min-h-24`}>
          {post.description}
        </p>
        <div className="flex justify-between">
          <h2>Latest Release</h2>
          <div className="text-right">
            {formatDate(post.releaseDate.toString())}
          </div>
        </div>
        {post.releaseNotes && <ReleaseNotes post={post} />}
      </div>
    </section>
  )
}
