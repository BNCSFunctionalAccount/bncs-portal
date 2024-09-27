import { DashboardIcon } from '~/assets/icons/DashboardIcon'
import { INavItem } from './types'
import { HomeIcon } from '~/assets/icons/HomeIcon'
import { TicketIcon } from '~/assets/icons/TicketIcon'
import { LogoutIcon } from '~/assets/icons/LogoutIcon'

export const SIDEBAR_NAVITEMS: INavItem[] = [
  { href: '/', text: 'Home', icon: <HomeIcon /> },
  { href: '/dashboard', text: 'Dashboard', icon: <DashboardIcon /> },
  {
    href: 'https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1',
    text: 'Submit a Ticket',
    icon: <TicketIcon />,
  },
  {
    href: '/api/auth/logout',
    text: 'Logout',
    icon: <LogoutIcon />,
    isAnchor: true,
  },
]
