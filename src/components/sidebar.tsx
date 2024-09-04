import React from 'react';
import styles from '../styles/dashboard.module.css';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3>BNCS Product Portal</h3>
      <ul>
        <li>
           <a className={styles.link}  href="/"> 
            Home
            </a>
        </li>
        <li>
            <a className={styles.link}  href="/dashboard"> 
            Dashboard
            </a>
        </li>
        <li>
            <a className={styles.link}  href="/cores"> 
            Cores
            </a>
        </li>
        <li>
            <a className={styles.link}  href="/drivers"> 
            Drivers
            </a>
        </li>
        <li>
           <a className={styles.link} href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1">
            Submit a Ticket
            </a>
        </li>
        <li>
            <a className={styles.link} href="/api/auth/logout">Logout</a>
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
