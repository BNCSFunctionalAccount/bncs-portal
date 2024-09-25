'use client'

import { useLiveQuery } from 'next-sanity/preview'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import { formatDate } from '~/utils'
import { Post, postBySlugQuery } from '~/lib/sanity.queries'
import { FC } from 'react'
import { sans, serif } from '~/assets/fonts'

interface ISlugSectionProps {
  staticPost: Post
}

export const SlugSection: FC<ISlugSectionProps> = ({ staticPost }) => {
  const [post] = useLiveQuery(staticPost, postBySlugQuery, {
    slug: staticPost.slug.current,
  })

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
        <p className={`${serif.className} text-2xl mt-0`}>{post.description}</p>
        <p className={`${sans.className} font-semibold text-sm mt-5`}>
          {formatDate(post._createdAt)}
        </p>
        {post.releaseNotes && (
          <div className={`${serif.className} text-xl tracking-tight mt-6`}>
            <p>Release Notes: {post.releaseNotes}</p>
          </div>
        )}
      </div>
    </section>
  )
}
