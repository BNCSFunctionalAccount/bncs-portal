import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/landingPage.module.css';
import Header from '../components/header';

export default function LandingPage() {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.largeText}>Welcome to the BNCS Support Portal</h1>
        <p>Our team is here to help. Access our knowledge base, submit a ticket, and get in touch with us.</p>
        <div className={styles.buttonContainer}>
          

          {/* Alternatively, you can use router.push() */}
          <button className={styles.blueButton} >Knowledge Base</button>

          <button className={styles.greyButton} >Pricing</button>

        </div>
      </div>
    </div>
  );
}