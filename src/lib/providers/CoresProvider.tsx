"use client"

import React, { createContext, Dispatch, FC, useState } from "react";

interface CoresContextType {
	userRoles: string[];
	setUserRoles: Dispatch<React.SetStateAction<string[]>>;
	filter: string;
	setFilter: Dispatch<React.SetStateAction<string>>;
	searchQuery: string;
	setSearchQuery: Dispatch<React.SetStateAction<string>>;
}

export const CoresContext = createContext<CoresContextType>({
	userRoles: [],
	setUserRoles: () => { },
	filter: 'All',
	setFilter: () => { },
	searchQuery: '',
	setSearchQuery: () => { }
})

interface ICoresProviderProps {
	children: React.ReactNode
}

export const CoresProvider: FC<ICoresProviderProps> = ({ children }) => {
	const [userRoles, setUserRoles] = useState<string[]>([]);
	const [filter, setFilter] = useState<string>('All');
	const [searchQuery, setSearchQuery] = useState<string>('');

	return (
		<CoresContext.Provider
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
		</CoresContext.Provider>
	)
}