import { PortableText } from '@portabletext/react'
import { FC } from 'react'
import { PortableTextBlock } from 'sanity'
import { serif } from '~/assets/fonts'
import { Post } from '~/lib/sanity.queries'

interface IReleaseNotesProps {
  post: Post
}

export const ReleaseNotes: FC<IReleaseNotesProps> = ({
  post: { releaseNotes },
}) => (
  <div className={`${serif.className} text-xl tracking-tight mt-6`}>
    {/* post.releaseNotes should be of type PortableTextBlock but is currently returning as string instead */}
    {typeof releaseNotes == 'string' ? (
      releaseNotes
    ) : (
      <PortableText value={releaseNotes} />
    )}
  </div>
)
