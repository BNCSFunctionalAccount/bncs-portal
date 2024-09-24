import { Sidebar } from '../../components/Sidebar'
import { DashboardFilter } from '../../components/DashboardFilter'
import { DashboardSearch } from '../../components/DashboardSearch'
import { DashboardTable } from '../../components/DashboardTable'
import { DashboardProvider } from '../../lib/providers/DashboardProvider'
import { getStaticPosts } from '~/utils'

export default async function Dashboard() {
  const staticPosts = await getStaticPosts()

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-72 p-5 w-[calc(100%-260px)]">
        <h2>Dashboard</h2>
        <DashboardProvider>
          <div className="flex gap-4 items-center mb-5">
            <DashboardFilter />
            <DashboardSearch />
          </div>
          <DashboardTable staticPosts={staticPosts} />
        </DashboardProvider>
      </div >
    </div >
  )
}
