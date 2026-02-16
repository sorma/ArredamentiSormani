import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const address = "Asso, Via Circonvallazione 14";
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(address)}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Arredamenti Sormani</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/contatti" className={styles.footerLink}>Contatti</Link>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.footerLink}>Termini di Servizio</Link>
        </div>
        <div className={styles.location}>
          <Link href={googleMapsUrl} className={styles.locationLink} target="_blank" rel="noopener noreferrer">
            {address}
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Arredamenti Sormani. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
