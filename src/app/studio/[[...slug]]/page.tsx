import { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import { metadata as studioMetadata } from "next-sanity/studio/metadata";
import config from 'sanity.config'

export const metadata: Metadata = {
	...studioMetadata,
	title: 'Loading Studio...'
}

export default function StudioPage() {
	return (
		<NextStudio config={config} unstable_globalStyles />
	)
}