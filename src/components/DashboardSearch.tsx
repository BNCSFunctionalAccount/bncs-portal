'use client'

import { useContext } from 'react'
import { DashboardContext } from '~/lib/providers/DashboardProvider'

export const DashboardSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(DashboardContext)

  return (
    <div className='flex gap-2 items-center'>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search descriptions..."
        className='p-1 text-base border border-black rounded'
      />
    </div>
  )
}
