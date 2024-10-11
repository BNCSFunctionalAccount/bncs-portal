'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useContext, useEffect } from 'react'
import { DriversContext } from '~/lib/providers/DriversProvider'


import Link from 'next/link'



interface INavItemProps {
  href: string
  children: React.ReactNode
  isAnchor?: boolean
  icon: JSX.Element
  isUserGuide?: boolean
}

export const NavItem = ({ href, children, isAnchor, icon, isUserGuide }: INavItemProps) => {

  const { userRoles, filter, searchQuery, setUserRoles } =
    useContext(DriversContext)

  const { user, isLoading, error } = useUser()
  

  useEffect(() => {
    if (user && user['https://localhost:3000/roles']) {
      const roles = user['https://localhost:3000/roles'] as string[]
      setUserRoles(roles)
    }
  }, [user, setUserRoles])

  


  return (
    <li className="mb-2">
      {isAnchor ? (
        <div className="flex hover:text-evidenOrange items-center gap-4 hover:font-bold transition-all ease-in-out duration-150">
          {icon}
          <a href={href} className="mr-5">
            {children}
          </a>
        </div>
      ) : isUserGuide ? ( 
        userRoles.includes("BBC") ? (
            <div className="flex hover:text-evidenOrange items-center gap-4 hover:font-bold transition-all ease-in-out duration-150">
            {icon}
            <Link href={href} className="mr-5">
              {children}
            </Link>
          </div>
        ) : null
      ) : (
      
        <div className="flex hover:text-evidenOrange items-center gap-4 hover:font-bold transition-all ease-in-out duration-150">
          {icon}
          <Link href={href} className="mr-5">
            {children}
          </Link>
        </div>
      )}
    </li>
  )
}
