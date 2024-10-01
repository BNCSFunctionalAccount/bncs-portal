'use client'

import { useContext } from 'react'

import { DriversContext } from '~/lib/providers/DriversProvider'

import { Input } from './input'
import { SearchIcon } from '~/assets/icons/SearchIcon'

export const DriversSearch = () => {
  const { setSearchQuery } = useContext(DriversContext)

  return (
    <Input
      icon={<SearchIcon />}
      titleText="Description: "
      labelAbove
      id="search"
      border
      placeholder="Search descriptions..."
      onInputChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}
