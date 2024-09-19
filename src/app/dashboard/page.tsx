import { getClient } from "~/lib/sanity.client";
import { getPosts } from "~/lib/sanity.queries";
import styles from '../../styles/dashboard.module.css'
import Sidebar from "~/components/Sidebar";
import { DashboardFilter } from "~/components/DashboardFilter";
import { DashboardSearch } from "~/components/DashboardSearch";
import { PostsTable } from "~/components/PostsTable";
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
						<DashboardFilter />
						<DashboardSearch />
					</div>
					<PostsTable staticPosts={staticPosts} />
				</DashboardProvider>
			</div>
		</div>
	)
}