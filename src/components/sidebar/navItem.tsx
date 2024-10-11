import Link from 'next/link'

interface INavItemProps {
  href: string
  children: React.ReactNode
  isAnchor?: boolean
  icon: JSX.Element
  isUserGuide?: boolean
}

export const NavItem = ({ href, children, isAnchor, icon, isUserGuide }: INavItemProps) => {

  const userRole = "BBC"

  
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
        userRole == "BBC" ? (
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
