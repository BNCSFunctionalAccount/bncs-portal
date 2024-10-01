'use client'

import { useContext } from 'react'

import { DashboardContext } from '~/lib/providers/DashboardProvider'

import { Select } from './select'

export const DashboardFilter = () => {
  const { filter, setFilter } = useContext(DashboardContext)

  return (
    <Select
      labelAbove
      selectedOption={filter}
      setOption={setFilter}
      border
      titleText={'Availability:'}
      menuItems={[
        { title: 'All' },
        { title: 'Available', clickEffect: (e) => console.log(e.target) },
      ]}
    />
  )
}
