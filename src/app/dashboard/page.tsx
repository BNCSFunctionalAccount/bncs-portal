import { Sidebar } from '../../components/sidebar'
import { DashboardFilter } from '../../components/DashboardFilter'
import { DashboardSearch } from '../../components/DashboardSearch'
import { DashboardTable } from '../../components/DashboardTable'
import { DashboardProvider } from '../../lib/providers/DashboardProvider'
import { getStaticPosts } from '~/utils'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { SIDEBAR_NAVITEMS } from '~/components/sidebar/constants'

export default withPageAuthRequired(
  async function Dashboard() {
    const staticPosts = await getStaticPosts()

    return (
      <div className="flex h-screen justify-between w-full">
        <div>
          <Sidebar navItems={SIDEBAR_NAVITEMS} />
        </div>
        <div className="flex flex-col h-full p-5 w-[calc(100%-256px)]">
          <h1 className='mb-2'>Dashboard</h1>
          <div className="absolute right-6 top-10">
            <Image src={logo} alt="Eviden Logo" width={175} height={100} />
          </div>
          <DashboardProvider>
            <div className="flex gap-4 items-start">
              <DashboardFilter />
              <DashboardSearch />
            </div>
            <DashboardTable staticPosts={staticPosts} />
          </DashboardProvider>
        </div>
      </div>
    )
  },
  { returnTo: '/dashboard' },
)
