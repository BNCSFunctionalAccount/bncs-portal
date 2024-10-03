import { FC } from 'react';
import { PortableText } from '@portabletext/react';

import { serif } from '~/assets/fonts';
import { Post } from '~/lib/sanity.queries';

interface IReleaseNotesProps {
  post: Post;
}

export const ReleaseNotes: FC<IReleaseNotesProps> = ({
  post: { releaseNotes, version },
}) => (
  <div className="mt-5">
    Version {version}
    <div className={`${serif.className} text-xl tracking-tight`}>
      {/* post.releaseNotes should be of type PortableTextBlock but is currently returning as string instead */}
      {typeof releaseNotes == 'string' ? (
        releaseNotes
      ) : releaseNotes ? (
        <PortableText value={releaseNotes} />
      ) : (
        '-'
      )}
    </div>
  </div>
);
