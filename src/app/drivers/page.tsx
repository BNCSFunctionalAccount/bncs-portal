import { getClient } from "~/lib/sanity.client"
import { getPosts } from "~/lib/sanity.queries"
import styles from '../../styles/dashboard.module.css'
import Sidebar from "~/components/Sidebar"
import { DriversFilter } from "~/components/DriversFilter"
import { DriversSearch } from "~/components/DriversSearch"
import { DriversTable } from "~/components/DriversTable"
import { DriversProvider } from "~/lib/DriversProvider"

async function getStaticPosts() {
	const client = getClient()
	const posts = await getPosts(client)

	return posts
}

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