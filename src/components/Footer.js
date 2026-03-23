import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const address = 'Asso, Via Circonvallazione 14';
  const phone = '3358310617';
  const googleMapsUrl = `https://www.google.com/maps/place/Arredamenti+Sormani/@45.8635949,9.2733752,17z/data=!4m6!3m5!1s0x47841e510de4e4b3:0xf1bf11f74e023c0!8m2!3d45.8635912!4d9.2759501!16s%2Fg%2F1tdnvry2?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D`;
  const telUrl = `tel:${phone}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topGrid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              Arredamenti Sormani
            </Link>
            <p className={styles.brandText}>
              Soluzioni d’arredo pensate per unire estetica, funzionalità e cura
              del dettaglio in ogni ambiente della casa.
            </p>
          </div>

          <div className={styles.linksColumn}>
            <span className={styles.columnTitle}>Navigazione</span>
            <div className={styles.linkList}>
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
              <Link href="/lavori" className={styles.footerLink}>
                Lavori
              </Link>
              <Link href="/contatti" className={styles.footerLink}>
                Contatti
              </Link>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <span className={styles.columnTitle}>Informazioni</span>
            <div className={styles.linkList}>
              <Link href="/privacy" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.footerLink}>
                Termini di Servizio
              </Link>
            </div>
          </div>

          <div className={styles.contactColumn}>
            <span className={styles.columnTitle}>Contatti</span>
            <a
              href={telUrl}
              className={styles.contactLink}
            >
              {phone}
            </a>
            <a
              href={googleMapsUrl}
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {address}
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Arredamenti Sormani. Tutti i diritti riservati.
          </p>
          <p className={styles.note}>Sito vetrina</p>
        </div>
      </div>
    </footer>
  );
}
