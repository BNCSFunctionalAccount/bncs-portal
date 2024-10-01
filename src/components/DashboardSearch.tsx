'use client'

import { useContext } from 'react'

import { DashboardContext } from '~/lib/providers/DashboardProvider'

import { Input } from './input'
import { SearchIcon } from '~/assets/icons/SearchIcon'

export const DashboardSearch = () => {
  const { setSearchQuery } = useContext(DashboardContext)

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
