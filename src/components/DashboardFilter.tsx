'use client'

import { useContext } from 'react'
import { DashboardContext } from '~/lib/providers/DashboardProvider'
import { Select } from './select'

export const DashboardFilter = () => {
  const { filter, setFilter } = useContext(DashboardContext)

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="filter">Filter License: </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-1 border-black rounded"
      >
        <option value="All">All</option>
        <option value="Licensed">Licensed</option>
        <option value="Not Licensed">Not Licensed</option>
      </select>
      <Select
        titleText="Filter License"
        menuItems={[
          { title: 'All', clickEffect: () => console.log('title') },
          { title: 'Licensed', clickEffect: (e) => console.log(e.target) },
          { title: 'Not Licensed', clickEffect: (e) => console.log(e.target) },
        ]}
      />
    </div>
  )
}
