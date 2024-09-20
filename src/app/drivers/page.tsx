import styles from '../../styles/dashboard.module.css'
import Sidebar from "~/components/Sidebar"
import { DriversFilter } from "~/components/DriversFilter"
import { DriversSearch } from "~/components/DriversSearch"
import { DriversTable } from "~/components/DriversTable"
import { DriversProvider } from "~/lib/providers/DriversProvider"
import { getStaticPosts } from "~/utils"

export default async function Drivers() {
	const staticPosts = await getStaticPosts()

	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<div className={styles.content}>
				<h2>Drivers</h2>
				<DriversProvider>
					<div className={styles.filterContainer}>
						<DriversFilter />
						<DriversSearch />
					</div>
					<DriversTable staticPosts={staticPosts} />
				</DriversProvider>
			</div>
		</div>
	)
}