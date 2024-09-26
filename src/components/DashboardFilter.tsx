'use client'

import { useContext } from 'react'

import { DashboardContext } from '~/lib/providers/DashboardProvider'

import { Select } from './select'

export const DashboardFilter = () => {
  const { filter, setFilter } = useContext(DashboardContext)

  return (
    <div className="flex gap-2 items-center">
      <Select
        selectedOption={filter}
        setOption={setFilter}
        border
        titleText={'Filter License'}
        menuItems={[
          { title: 'All' },
          { title: 'Licensed' },
          { title: 'Not Licensed', clickEffect: (e) => console.log(e.target) },
        ]}
      />
    </div>
  )
}
