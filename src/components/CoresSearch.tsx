"use client"

import { useContext } from "react";
import { CoresContext } from "~/lib/CoresProvider";

export const CoresSearch = () => {
	const { searchQuery, setSearchQuery } = useContext(CoresContext)

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