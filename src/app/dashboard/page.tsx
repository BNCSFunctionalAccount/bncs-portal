import styles from '../../styles/dashboard.module.css'
import Sidebar from '~/components/Sidebar'
import { DashboardFilter } from '../../components/DashboardFilter'
import { DashboardSearch } from '../../components/DashboardSearch'
import { DashboardTable } from '../../components/DashboardTable'
import { DashboardProvider } from '../../lib/providers/DashboardProvider'
import { getStaticPosts } from '~/utils'

export default async function Dashboard() {
  const staticPosts = await getStaticPosts()

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <h2>Dashboard</h2>
        <DashboardProvider>
          <div className={styles.filterContainer}>
            <DashboardFilter />
            <DashboardSearch />
          </div>
          <DashboardTable staticPosts={staticPosts} />
        </DashboardProvider>
      </div>
    </div>
  )
}
