'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './cucine.module.css';

function IconCatalogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="13" y2="11" />
    </svg>
  );
}

function IconContatti() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const highlights = [
  'Cucine su misura Made in Italy',
  'Design contemporaneo e classico',
  'Ricerca su materiali e meccanismi',
  'Attenzione alla sostenibilità',
];

const numbers = [
  { value: '1984', label: 'Inizio del percorso Arredo3' },
  { value: '300+', label: 'Persone coinvolte in azienda' },
  { value: '50+', label: 'Paesi raggiunti nel mondo' },
  { value: '600+', label: 'Finiture disponibili' },
];

const cataloghi = [
  {
    titolo: 'Collezioni cucine',
    descrizione:
      "Scopri tutte le linee Arredo3: moderne, classiche, minimal e su misura, con un'ampia scelta di finiture e sistemi di apertura.",
    link: 'https://www.arredo3.com/kitchens',
    esterno: true,
  },
  {
    titolo: 'Richiedi una consulenza',
    descrizione:
      'Contattaci per fissare un appuntamento in showroom, ricevere materiali aggiornati e avviare il tuo progetto cucina personalizzato.',
    link: '/contatti',
    esterno: false,
  },
];

export default function CucinePage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <main className={styles.pageWrapper}>
        <div
          className={`${styles.container} ${
            showPage ? styles.pageVisible : styles.pageHidden
          }`}
        >
          <section className={styles.hero}>
            <h1 className={styles.title}>
              Cucine progettate
              <br />
              per essere vissute
            </h1>
            <p className={styles.subtitle}>
              Una selezione di soluzioni pensate per unire estetica,
              funzionalità e qualità, con progetti capaci di adattarsi davvero
              ai tuoi spazi.
            </p>
          </section>

          <section className={styles.brandSection}>
            <div className={styles.brandIntro}>
              <div className={styles.brandLogoWrap}>
                <Image
                  src="/images/Arredo3.webp"
                  alt="Logo Arredo3"
                  width={170}
                  height={170}
                  className={styles.brandLogo}
                  priority
                />
              </div>

              <div className={styles.brandContent}>
                {/* ✅ MODIFICA 1: "Brand partner" → "In collaborazione" */}
                <span className={styles.brandEyebrow}>In collaborazione</span>

                <h2 className={styles.brandTitle}>Arredo3 Cucine</h2>

                <p className={styles.brandText}>
                  Arredo3 realizza cucine su misura Made in Italy dal 1984 e
                  produce interamente a Scorzè, in provincia di Venezia,
                  sviluppando soluzioni moderne e classiche con una forte
                  attenzione alla cultura del design.
                </p>

                <p className={styles.brandText}>
                  L'azienda dichiara inoltre un approccio orientato a ricerca su
                  materiali e meccanismi, innovazione produttiva e sostenibilità,
                  anche attraverso l'uso di fonti energetiche rinnovabili.
                </p>

                <div className={styles.featureList}>
                  {highlights.map((item) => (
                    <div key={item} className={styles.featureItem}>
                      <span className={styles.featureDot} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.brandActions}>
                  <Link href="/contatti" className={styles.primaryLink}>
                    Richiedi una consulenza
                  </Link>
                  <a
                    href="https://www.arredo3.com/company"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryLink}
                  >
                    Scopri il brand
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.brandStats}>
              {numbers.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <span className={styles.statValue}>{item.value}</span>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.brandNote}>
              <p>
                Arredo3 presenta anche un'offerta molto ampia in termini di
                personalizzazione, con oltre 600 finiture, 22 stili di anta, 8
                sistemi di apertura e una linea sostenibile dedicata chiamata
                Gaia.
              </p>
            </div>

            <div className={styles.catalogSection}>
              <h3 className={styles.catalogHeading}>Collezioni e contatti</h3>
              <div className={styles.catalogGrid}>
                {cataloghi.map((cat) =>
                  cat.esterno ? (
                    <a
                      key={cat.titolo}
                      href={cat.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.catalogCard}
                    >
                      <div className={styles.catalogIcon}>
                        <IconCatalogo />
                      </div>
                      <div className={styles.catalogBody}>
                        <span className={styles.catalogBrand}>Arredo3</span>
                        <h4 className={styles.catalogTitle}>{cat.titolo}</h4>
                        <p className={styles.catalogDesc}>{cat.descrizione}</p>
                      </div>
                      <div className={styles.catalogFooter}>
                        <span className={styles.catalogCta}>
                          Scopri
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link
                      key={cat.titolo}
                      href={cat.link}
                      className={`${styles.catalogCard} ${styles.catalogCardAccent}`}
                    >
                      <div className={`${styles.catalogIcon} ${styles.catalogIconAccent}`}>
                        <IconContatti />
                      </div>
                      <div className={styles.catalogBody}>
                        <span className={styles.catalogBrand}>Arredo3</span>
                        <h4 className={styles.catalogTitle}>{cat.titolo}</h4>
                        <p className={styles.catalogDesc}>{cat.descrizione}</p>
                      </div>
                      <div className={styles.catalogFooter}>
                        <span className={`${styles.catalogCta} ${styles.catalogCtaAccent}`}>
                          Contattaci
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </section>

          {/* ✅ MODIFICA 2: disclaimer legale aggiunto */}
          <p className={styles.disclaimer}>
            I marchi citati sono di proprietà dei rispettivi titolari.
            Operiamo come azienda indipendente e non siamo store ufficiali
            dei produttori elencati.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
