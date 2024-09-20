"use client"

import { useContext } from "react";
import { DashboardContext } from "~/lib/providers/DashboardProvider";

export const DashboardSearch = () => {
	const { searchQuery, setSearchQuery } = useContext(DashboardContext)

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input
				id="search"
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search descriptions..."
				style={{ padding: '5px', fontSize: '16px' }}
			/>
		</div>
	)
}