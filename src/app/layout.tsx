import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Metadata } from 'next';

import { sans } from '~/assets/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'BNCS Product Portal',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${sans.className} overflow-hidden`}>{children}</body>
      </UserProvider>
    </html>
  );
};

export default RootLayout;
