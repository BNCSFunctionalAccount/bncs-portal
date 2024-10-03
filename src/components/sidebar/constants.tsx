import { CoresIcon } from '~/assets/icons/CoresIcon';
import { DriverIcon } from '~/assets/icons/DriverIcon';
import { HomeIcon } from '~/assets/icons/HomeIcon';
import { LogoutIcon } from '~/assets/icons/LogoutIcon';
import { TicketIcon } from '~/assets/icons/TicketIcon';

import { INavItem } from './types';

export const SIDEBAR_NAVITEMS: INavItem[] = [
  { href: '/', text: 'Home', icon: <HomeIcon /> },
  { href: '/drivers', text: 'Drivers', icon: <DriverIcon /> },
  { href: '/cores', text: 'Cores', icon: <CoresIcon /> },
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
];
