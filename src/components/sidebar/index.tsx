import { NavItem } from './navItem'
import { INavItem } from './types'

interface ISidebarProps {
  navItems: INavItem[]
}

export const Sidebar = ({ navItems }: ISidebarProps) => {
  return (
    <div className="w-64 h-full bg-deepBlue text-white p-5 fixed shadow-md">
      <div className="flex flex-col gap-4 mb-5">
        <h3 className="font-semibold text-xl">BNCS Product Portal</h3>
      </div>
      <ul className="text-lg space-y-4">
        {navItems.map((item, index) => (
          <NavItem
            href={item.href}
            key={index}
            icon={item.icon}
            isAnchor={item.isAnchor}
          >
            {item.text}
          </NavItem>
        ))}
      </ul>
    </div>
  )
}
