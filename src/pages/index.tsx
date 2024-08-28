// pages/index.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/landingPage.module.css';
import Header from '../components/header';

export default function LandingPage() {
  const router = useRouter();

  

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.largeText}>Welcome to the BNCS Product Portal</h1>
        <p>Our team is here to help. Access our knowledge base, submit a ticket, and get in touch with us.</p>
        <div className={styles.buttonContainer}>
          
        </div>
      </div>
    </div>
  );
}


//<Link href="/knowledge-base">
//<button className={styles.blueButton}>Knowledge Base</button>
//</Link>

//<a
//className={styles.greyButton}
//href="https://bncs.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1">
//Submit a Ticket
//</a>