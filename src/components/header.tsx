import React from 'react';
import styles from '../styles/header.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

function Header() {
  const { user, isLoading } = useUser();

  return (
    <header className={styles.header}>
      <h3 className={styles.headerTitle}>BNCS Support Portal</h3>
      <div className={styles.headerPadd}>
        <nav className={styles.headerNav}>
          
          {!isLoading && (
            user ? (
                <a>Knowledge Base</a>
            ) : (
                <a>Knowledge Base</a>
            )
          )}
          
          
          {!isLoading && (
            user ? (
              <a>Submit a Ticket</a>
            ) : (
              <a>Contact Us</a>
            )
          )}
          {!isLoading && (
            user ? (
              <a href="/api/auth/logout">Logout</a>
            ) : (
              <a href="/api/auth/login">Login</a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
