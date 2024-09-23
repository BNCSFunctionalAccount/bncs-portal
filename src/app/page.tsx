import Header from '../components/Header'
import styles from '../styles/landingPage.module.css'

export default function LandingPage() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.largeText}>Welcome to the BNCS Product Portal</h1>
        <p>
          Our team is here to help. Access our knowledge base, submit a ticket,
          and get in touch with us.
        </p>
        <div className={styles.buttonContainer} />
      </div>
    </main>
  )
}
