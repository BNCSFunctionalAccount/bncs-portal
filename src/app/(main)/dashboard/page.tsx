import { DashboardFilter } from '../../../components/DashboardFilter'
import { DashboardSearch } from '../../../components/DashboardSearch'
import { DashboardTable } from '../../../components/DashboardTable'
import { DashboardProvider } from '../../../lib/providers/DashboardProvider'
import { getStaticPosts } from '~/utils'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default withPageAuthRequired(
  async function Dashboard() {
    const staticPosts = await getStaticPosts()

    return (
      <section className='flex flex-col h-full gap-2'>
        <h1 className='text-4xl'>Dashboard</h1>
        <DashboardProvider>
          <div className="flex gap-4 items-start">
            <DashboardFilter />
            <DashboardSearch />
          </div>
          <DashboardTable staticPosts={staticPosts} />
        </DashboardProvider>
      </section>
    )
  },
  { returnTo: '/dashboard' },
)
