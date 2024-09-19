import { getClient } from "~/lib/sanity.client";
import { getPosts } from "~/lib/sanity.queries";
import styles from '../../styles/dashboard.module.css'
import Sidebar from "~/components/sidebar";
import { Filter } from "~/components/filter";
import { Search } from "~/components/search";
import { PostsTable } from "~/components/postsTable";
import { DashboardProvider } from "~/lib/DashboardProvider";

async function getStaticPosts() {
	const client = getClient()
	const posts = await getPosts(client)

	return posts
}

export default async function Dashboard() {
	const staticPosts = await getStaticPosts()

	return (
		<div className={styles.dashboard}>
			<Sidebar />
			<div className={styles.content}>
				<h2>Dashboard</h2>
				<DashboardProvider>
					<div className={styles.filterContainer}>
						<Filter />
						<Search />
					</div>
					<PostsTable staticPosts={staticPosts} />
				</DashboardProvider>
			</div>
		</div>
	)
}