'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './contatti.module.css';

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16.2v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.12 2.5 2 2 0 0 1 3.11.32h2a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.64a2 2 0 0 1-.45 2.11L6.46 7.64a16 16 0 0 0 6 6l.85-.85a2 2 0 0 1 2.11-.45c.85.31 1.74.53 2.64.65A2 2 0 0 1 21 16.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContattiPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main
        className={`${styles.container} ${
          showPage ? styles.pageVisible : styles.pageHidden
        }`}
      >
        <section className={styles.hero}>
          <h1 className={styles.title}>Parliamo del tuo progetto</h1>
          <p className={styles.subtitle}>
            Siamo a disposizione per informazioni, appuntamenti in showroom e
            richieste sui nostri arredamenti. Qui trovi tutti i riferimenti utili
            per contattarci in modo diretto e semplice.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.introCard}>
              <h2>Un contatto diretto, semplice e immediato</h2>
              <p>
                Preferiamo un rapporto chiaro e personale, capace di accompagnarti
                nella scelta di soluzioni su misura per i tuoi ambienti.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <article className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <PinIcon />
                </div>
                <div>
                  <span className={styles.cardLabel}>Indirizzo</span>
                  <h3>Showroom</h3>
                  <p>Via Circonvallazione 14, Asso (CO)</p>
                </div>
              </article>

              <article className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <MailIcon />
                </div>
                <div>
                  <span className={styles.cardLabel}>Email</span>
                  <h3>Scrivici</h3>
                  <p>arredamentisormani@virgilio.it</p>
                </div>
              </article>

              <article className={styles.contactCard}>
                <div className={styles.iconWrap}>
                  <PhoneIcon />
                </div>
                <div>
                  <span className={styles.cardLabel}>Telefono</span>
                  <h3>Chiamaci</h3>
                  <p>+39 335 8310617</p>
                </div>
              </article>
            </div>
          </div>

          <aside className={styles.infoSection}>
            <div className={styles.infoCard}>
              <span className={styles.infoEyebrow}>Arredamenti Sormani</span>

              <h2>Soluzioni d’arredo su misura</h2>

              <p className={styles.infoText}>
                Cura del dettaglio, attenzione al cliente e consulenza diretta
                per trasformare ogni ambiente in uno spazio armonioso,
                funzionale e personale.
              </p>

              <div className={styles.infoNote}>
                <p>
                  Ti accogliamo in showroom per un confronto diretto, con
                  attenzione ai dettagli e soluzioni pensate davvero sui tuoi
                  spazi.
                </p>
              </div>

              <div className={styles.infoFeatures}>
                <div className={styles.infoFeature}>
                  <span className={styles.featureDot}></span>
                  <span>Consulenza personale</span>
                </div>

                <div className={styles.infoFeature}>
                  <span className={styles.featureDot}></span>
                  <span>Progetti su misura</span>
                </div>

                <div className={styles.infoFeature}>
                  <span className={styles.featureDot}></span>
                  <span>Attenzione ai dettagli</span>
                </div>
              </div>

              <div className={styles.infoActions}>
                <a href="tel:+393358310617" className={styles.primaryLink}>
                  <span>Chiama ora</span>
                  <span className={styles.arrow}>
                    <ArrowIcon />
                  </span>
                </a>

                <a
                  href="https://www.google.com/maps/place/Arredamenti+Sormani/@45.8635949,9.2733752,17z/data=!4m6!3m5!1s0x47841e510de4e4b3:0xf1bf11f74e023c0!8m2!3d45.8635912!4d9.2759501!16s%2Fg%2F1tdnvry2?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  <span>Apri Maps</span>
                  <span className={styles.arrow}>
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
