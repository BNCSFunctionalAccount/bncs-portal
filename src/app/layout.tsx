import './globals.css'
import { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { sans } from '~/lib/fonts'

export const metadata: Metadata = {
  title: 'Home',
  description: 'test',
}

const RootLayout = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${sans.className}`}>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}

export default RootLayout;