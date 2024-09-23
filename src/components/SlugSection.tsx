"use client"

import { useLiveQuery } from "next-sanity/preview"
import Image from "next/image"
import { urlForImage } from "~/lib/sanity.image"
import { formatDate } from "~/utils"
import { PortableText } from "@portabletext/react"
import { Post, postBySlugQuery } from "~/lib/sanity.queries"
import { FC } from "react"
import styles from "../styles/landingPage.module.css"

interface ISlugSectionProps {
	staticPost: Post
}

export const SlugSection: FC<ISlugSectionProps> = ({ staticPost }) => {
	const [post] = useLiveQuery(staticPost, postBySlugQuery, {
		slug: staticPost.slug.current
	})

	return (
		<section className="post">
			{post.mainImage ? (
				<Image
					className="post__cover"
					src={urlForImage(post.mainImage)?.url() || ''}
					height={231}
					width={367}
					alt=""
				/>
			) : (
				<div className="post__cover--none" />
			)}
			<div className="post__container">
				<h1 className="post__title">{post.title}</h1>
				<p className="post__description">{post.description}</p>
				<p className="post__date">{formatDate(post._createdAt)}</p>
				<div className="post__content">
					<PortableText value={post.releaseNotes} />
				</div>
			</div>
		</section>
	)
}