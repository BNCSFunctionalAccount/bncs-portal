import styles from '../../styles/dashboard.module.css'
import Sidebar from "~/components/Sidebar"
import { CoresTable } from "~/components/CoresTable"
import { CoresProvider } from "~/lib/providers/CoresProvider"
import { CoresFilter } from "~/components/CoresFilter"
import { CoresSearch } from "~/components/CoresSearch"
import { getStaticPosts } from '~/utils'

export default async function Cores() {
	const staticPosts = await getStaticPosts()

	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<div className={styles.content}>
				<h2>Cores</h2>
				<CoresProvider>
					<div className={styles.filterContainer}>
						<CoresFilter />
						<CoresSearch />
					</div>
					<CoresTable staticPosts={staticPosts} />
				</CoresProvider>
			</div>
		</div>
	)
}