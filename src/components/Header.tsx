import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { getSession } from '@auth0/nextjs-auth0'

export const Header = async () => {
  const session = await getSession()

  return (
    <header className="flex bg-deepBlue px-5 py-3 justify-between items-center fixed w-full top-0 z-50 text-white">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Eviden Logo" width={150} height={100} />
        <h2>|</h2>
        <h1 className="m-0">BNCS Product Portal</h1>
      </div>
      <div className="mr-12">
        <nav className="m-0 p-0 flex gap-5">
          {session?.user && (
            <>
              <Link
                className="cursor-pointer hover:underline underline-offset-2 decoration-evidenOrange hover:transition-all hover:ease-in-out hover:duration-500"
                href="/dashboard"
              >
                Dashboard
              </Link>
              <Link
                className="cursor-pointer hover:underline underline-offset-2 decoration-evidenOrange hover:transition-all hover:ease-in-out hover:duration-500"
                href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1"
              >
                Submit a Ticket
              </Link>
            </>
          )}
          {session?.user ? (
            <a
              href="/api/auth/logout"
              className="cursor-pointer hover:underline underline-offset-2 decoration-evidenOrange hover:transition-all hover:ease-in-out hover:duration-500"
            >
              Logout
            </a>
          ) : (
            <Link
              href="/api/auth/login"
              className="cursor-pointer hover:underline underline-offset-2 decoration-evidenOrange hover:transition-all hover:ease-in-out hover:duration-500"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
