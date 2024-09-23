'use client'

import React from 'react'
import styles from '../styles/header.module.css'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const { user, isLoading } = useUser()

  const router = useRouter()

  const handleClick = (route: string) => {
    router.push(route)
  }

  return (
    <header className={styles.header}>
      <h3 className={styles.headerTitle}>BNCS Product Portal</h3>
      <div className={styles.headerPadd}>
        <nav className={styles.headerNav}>
          {!isLoading && user && (
            <>
              <a
                className={styles.clickable}
                onClick={() => handleClick('/dashboard')}
              >
                Dashboard
              </a>
              <a href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1">
                Submit a Ticket
              </a>
            </>
          )}

          {!isLoading &&
            (user ? (
              <a href="/api/auth/logout">Logout</a>
            ) : (
              <a href="/api/auth/login">Login</a>
            ))}
        </nav>
      </div>
    </header>
  )
}
