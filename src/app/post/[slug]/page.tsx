import { useLiveQuery } from "next-sanity/preview"
import Container from "~/components/Container"
import { getClient } from "~/lib/sanity.client"
import { getPost, Post, postBySlugQuery, postSlugsQuery } from "~/lib/sanity.queries"
import Image from "next/image"
import { urlForImage } from "~/lib/sanity.image"
import { formatDate } from "~/utils"
import { PortableText } from "@portabletext/react"

interface Query {
	[key: string]: string
}

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
			_type: "post",
			_id: "",
			_createdAt: "",
			binaryName: "",
			slug: {
				current: '',
				_type: "slug"
			},
			type: "",
			version: "",
			lastSupportedBNCS: "",
			description: "",
			readMe: false,
			size: 0,
			releaseNotes: [],
			releaseDate: [],
			organisationWithLicense: [],
			roles: [],
			viewers: [],
			deviceManufacturer: [],
			url: ""
		}
		return emptyPost
	}

	return post
}

export default async function ProjectSlugRoute({ params }) {
	const staticPost = await getStaticProps(params)

	const [post] = useLiveQuery(staticPost, postBySlugQuery, {
		slug: staticPost.slug.current
	})

	return (
		<Container>
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
		</Container>
	)
}