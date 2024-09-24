import { SanityStudio } from '~/components/SanityStudio'

export const dynamic = 'force-static'

export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <SanityStudio />
}
