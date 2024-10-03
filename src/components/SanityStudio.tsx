'use client';

import { NextStudio } from 'next-sanity/studio';
import config from 'sanity.config';

export const SanityStudio = () => {
  return <NextStudio config={config} unstable_globalStyles />;
};
