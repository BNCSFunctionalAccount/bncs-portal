'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { useLiveQuery } from 'next-sanity/preview'
import { FC, useContext, useEffect } from 'react'

import { DRIVER_HEADERS } from '~/app/dashboard/constants'
import { DashboardContext } from '~/lib/providers/DashboardProvider'
import { Post, postsQuery } from '~/lib/sanity.queries'

import styles from '../styles/dashboard.module.css'
import { Table } from './table'
import { ICell } from './table/types'

const userCanDownload = (
  userRoles: string[],
  driverRoles: string[],
): boolean => {
  return userRoles.some((role) => driverRoles.includes(role))
}

interface IDashboardTableProps {
  staticPosts: Post[]
}

export const DashboardTable: FC<IDashboardTableProps> = ({ staticPosts }) => {
  const { userRoles, filter, searchQuery, setUserRoles } =
    useContext(DashboardContext)

  const { user, isLoading, error } = useUser()

  useEffect(() => {
    if (user && user['https://localhost:3000/roles']) {
      const roles = user['https://localhost:3000/roles'] as string[]
      setUserRoles(roles)
    }
  }, [user, setUserRoles])

  const [posts] = useLiveQuery<Post[]>(staticPosts, postsQuery)

  const filteredPosts = posts.filter((post) => {
    const isLicensed = userCanDownload(userRoles, post.roles)
    const isCommerciallyAvailable = post.commerciallyAvailable === true

    // Show post if the user can download it OR if it's commercially available
    const shouldDisplay = isLicensed || isCommerciallyAvailable

    // Filter by the selected license filter
    const matchesLicenseFilter =
      filter === 'All' ||
      (filter === 'Licensed' && isLicensed) ||
      (filter === 'Not Licensed' && !isLicensed)

    // Filter for search query
    const matchesSearch = post.description
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase())

    // Return true if all conditions are met
    return shouldDisplay && matchesLicenseFilter && matchesSearch
  })

  const tableRows: ICell<string>[][] = (filteredPosts ?? []).map((post) => {
    const row: ICell<string>[] = [
      { text: post.title ?? '' },
      { text: post.version ?? '' },
      { text: post.description ?? '' },
      {
        text: userCanDownload(userRoles, post.roles)
          ? 'Licensed'
          : 'Not Licensed',
      },
    ]
    return row
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <section>
      <Table
        border={true}
        rows={tableRows}
        headers={DRIVER_HEADERS}
        sticky={'header'}
      />
    </section>
  )
}
