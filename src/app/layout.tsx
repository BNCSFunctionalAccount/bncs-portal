import './globals.css'
import { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { sans } from '~/assets/fonts'

export const metadata: Metadata = {
  title: 'BNCS Product Portal',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${sans.className} overflow-hidden`}>{children}</body>
      </UserProvider>
    </html>
  )
}

export default RootLayout
