'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

export const Header = () => {
  const { user, isLoading } = useUser()

  return (
    <header className="flex bg-[#002d3c] p-5 justify-between items-center fixed w-full top-0 z-50 text-white">
      <h3 className="m-0">BNCS Product Portal</h3>
      <div className="mr-12">
        <nav className="m-0 p-0 flex gap-5">
          {!isLoading && user && (
            <>
              <Link
                className="cursor-pointer"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <Link href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1">
                Submit a Ticket
              </Link>
            </>
          )}

          {!isLoading &&
            (user ? (
              <Link href="/api/auth/logout">Logout</Link>
            ) : (
              <Link href="/api/auth/login">Login</Link>
            ))}
        </nav>
      </div>
    </header>
  )
}
