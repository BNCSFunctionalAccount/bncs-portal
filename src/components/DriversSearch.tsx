"use client"

import { useContext } from "react";;
import { DriversContext } from "~/lib/providers/DriversProvider";

export const DriversSearch = () => {
	const { searchQuery, setSearchQuery } = useContext(DriversContext)

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