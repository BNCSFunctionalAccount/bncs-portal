'use client';

import React, { createContext, Dispatch, FC, useState } from 'react';

interface DriversContextType {
  userRoles: string[];
  setUserRoles: Dispatch<React.SetStateAction<string[]>>;
  filter: string;
  setFilter: Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: Dispatch<React.SetStateAction<string>>;
}

export const DriversContext = createContext<DriversContextType>({
  userRoles: [],
  setUserRoles: () => {},
  filter: 'All',
  setFilter: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
});

interface IDriversProviderProps {
  children: React.ReactNode;
}

export const DriversProvider: FC<IDriversProviderProps> = ({ children }) => {
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <DriversContext.Provider
      value={{
        userRoles,
        setUserRoles,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </DriversContext.Provider>
  );
};
