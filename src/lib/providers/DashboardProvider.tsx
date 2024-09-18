"use client"

import React, { createContext, Dispatch, FC, useState } from "react";

interface DashboardContextType {
	userRoles: string[];
	setUserRoles: Dispatch<React.SetStateAction<string[]>>;
	filter: string;
	setFilter: Dispatch<React.SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: Dispatch<React.SetStateAction<string>>;
}

export const DashboardContext = createContext<DashboardContextType>({
	userRoles: [],
	setUserRoles: () => { },
	filter: 'All',
	setFilter: () => { },
	searchQuery: '',
	setSearchQuery: () => { }
})

interface IDashboardProviderProps {
	children: React.ReactNode
}

export const DashboardProvider: FC<IDashboardProviderProps> = ({ children }) => {
	const [userRoles, setUserRoles] = useState<string[]>([]);
	const [filter, setFilter] = useState<string>('All');
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<DashboardContext.Provider
			value={{
				userRoles,
				setUserRoles,
				filter,
				setFilter,
				searchQuery,
				setSearchQuery
			}}
		>
			{children}
		</DashboardContext.Provider>
	)
}