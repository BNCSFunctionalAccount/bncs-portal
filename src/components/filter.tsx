"use client"

import { useContext } from "react";
import { DashboardContext } from "~/lib/DashboardProvider";

export const Filter = () => {
	const { filter, setFilter } = useContext(DashboardContext)

	return (
		<div>
			<label htmlFor="filter">Filter License: </label>
			<select
				id="filter"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				style={{ marginRight: '20px' }}
			>
				<option value="All">All</option>
				<option value="Licensed">Licensed</option>
				<option value="Not Licensed">Not Licensed</option>
			</select>
		</div>
	)
}