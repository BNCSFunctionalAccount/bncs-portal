'use client'

import { useContext } from 'react'

import { DashboardContext } from '~/lib/providers/DashboardProvider'

import { Input } from './input'

export const DashboardSearch = () => {
  const { searchQuery, setSearchQuery } = useContext(DashboardContext)

  return (
    <div className="flex gap-2 items-center">
      <Input
        titleText="Search: "
        id="search"
        border
        placeholder="Search descriptions..."
        onInputChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}
