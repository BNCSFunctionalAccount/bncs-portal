"use client"

import { FC, useContext, useEffect } from "react";
import { Post, postsQuery } from "~/lib/sanity.queries";
import styles from '../styles/dashboard.module.css'
import { DriversContext } from "~/lib/providers/DriversProvider";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useLiveQuery } from "next-sanity/preview";

const userCanDownload = (userRoles: string[], driverRoles: string[]): boolean => {
	return userRoles.some(role => driverRoles.includes(role));
};

interface IDriversTableProps {
	staticPosts: Post[]
}

export const DriversTable: FC<IDriversTableProps> = ({ staticPosts }) => {
	const {
		userRoles,
		filter,
		searchQuery,
		setUserRoles
	} = useContext(DriversContext)

	const { user, isLoading, error } = useUser();

	useEffect(() => {
		if (user && user["https://localhost:3000/roles"]) {
			const roles = user["https://localhost:3000/roles"] as string[];
			setUserRoles(roles);
		}
	}, [user]);

	const [posts] = useLiveQuery<Post[]>(staticPosts, postsQuery)

	const filteredPosts = posts?.filter(post => {
		const isLicensed = userCanDownload(userRoles, post.roles);
		const matchesFilter = filter === 'All' || (filter === 'Licensed' ? isLicensed : !isLicensed);
		const matchesSearch = post.description.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesFilter && matchesSearch;
	});

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	return (
		<section>
			{filteredPosts.length ? (
				<table className={styles.table}>
					<thead>
						<tr>
							<th style={{ width: '250px' }}>Title</th>
							<th style={{ width: '100px' }}>Version</th>
							<th style={{ width: '550px' }}>Description</th>
							<th style={{ width: '70px' }}></th>
						</tr>
					</thead>
					<tbody>
						{filteredPosts.map((post) => (
							<tr key={post._id}>
								<td>{post.title}</td>
								<td>{post.version}</td>
								<td>{post.description}</td>
								<td>
									{userCanDownload(userRoles, post.roles)
										? 'Licensed'
										: 'Not Licensed'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No posts found</p>
			)}
		</section>
	)
}