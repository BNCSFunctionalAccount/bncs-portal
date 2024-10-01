'use client'

import { useContext } from 'react'
import { DriversContext } from '~/lib/providers/DriversProvider'
import { Select } from './select'

export const DriversFilter = () => {
  const { filter, setFilter } = useContext(DriversContext)

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
