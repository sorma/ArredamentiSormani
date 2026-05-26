'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './armadi.module.css';

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

export default function ArmadiPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  const brandSections = [
    {
      nome: 'Elli',
      logo: '/images/Elli.webp',
      alt: 'Logo Elli',
      testo1:
        'Elli progetta e produce arredi eleganti e senza tempo, con una proposta capace di valorizzare la zona notte attraverso soluzioni raffinate, pulite e coerenti.',
      testo2:
        'Il sistema armadi Elli evolve costantemente con nuove soluzioni estetiche e funzionali, grazie a una struttura modulare pensata per offrire grande flessibilità progettuale.',
      punti: [
        'Arredi eleganti e senza tempo',
        'Flessibilità progettuale',
        'Struttura modulare',
        'Ricerca estetica e funzionale',
      ],
      stats: [
        { valore: 'Zona notte', label: 'Progettata con eleganza e ordine' },
        { valore: 'Modulare', label: 'Sistema adattabile agli spazi' },
        { valore: 'Su misura', label: 'Soluzioni flessibili e personalizzabili' },
        { valore: 'Ricercato', label: 'Stile sobrio e ben definito' },
      ],
      nota: "La proposta Elli si distingue per un equilibrio tra estetica, funzionalità e continuità stilistica, ideale per chi cerca armadiature eleganti e ben integrate nell'ambiente.",
      linkBrand: 'https://www.ellifratelli.com/portfolio-item/armadio/',
      cataloghi: [
        {
          titolo: 'Collezione Armadi',
          descrizione:
            'Sfoglia la proposta completa Elli per la zona notte: ante piane, scorrevoli, cabine armadio e soluzioni interne.',
          link: 'https://www.ellifratelli.com/portfolio-item/armadio/',
          esterno: true,
          icona: 'catalogo',
        },
        {
          titolo: 'Richiedi il catalogo',
          descrizione:
            'Passa in showroom o contattaci per ricevere il catalogo aggiornato e scoprire tutte le finiture disponibili.',
          link: '/contatti',
          esterno: false,
          icona: 'contatti',
        },
      ],
    },
  ];

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
              Armadi progettati
              <br />
              per valorizzare ogni spazio
            </h1>
            <p className={styles.subtitle}>
              Soluzioni pensate per unire ordine, eleganza e funzionalità, con
              progetti capaci di adattarsi con precisione agli ambienti della casa.
            </p>
          </section>

          {brandSections.map((brand) => (
            <section className={styles.brandSection} key={brand.nome}>
              <div className={styles.brandIntro}>
                <div className={styles.brandLogoWrap}>
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={170}
                    height={170}
                    className={styles.brandLogo}
                    priority={brand.nome === 'Elli'}
                  />
                </div>

                <div className={styles.brandContent}>
                  {/* ✅ MODIFICA 1: "Brand partner" → "In collaborazione" */}
                  <span className={styles.brandEyebrow}>In collaborazione</span>

                  <h2 className={styles.brandTitle}>{brand.nome}</h2>

                  <p className={styles.brandText}>{brand.testo1}</p>
                  <p className={styles.brandText}>{brand.testo2}</p>

                  <div className={styles.featureList}>
                    {brand.punti.map((item) => (
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
                      href={brand.linkBrand}
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
                {brand.stats.map((item) => (
                  <div key={item.label} className={styles.statCard}>
                    <span className={styles.statValue}>{item.valore}</span>
                    <span className={styles.statLabel}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.brandNote}>
                <p>{brand.nota}</p>
              </div>

              <div className={styles.catalogSection}>
                <h3 className={styles.catalogHeading}>Collezioni e contatti</h3>

                <div className={styles.catalogGrid}>
                  {brand.cataloghi.map((cat) =>
                    cat.esterno ? (
                      <a
                        key={cat.titolo}
                        href={cat.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.catalogCard}
                      >
                        <div className={styles.catalogIcon}>
                          {cat.icona === 'contatti' ? (
                            <IconContatti />
                          ) : (
                            <IconCatalogo />
                          )}
                        </div>
                        <div className={styles.catalogBody}>
                          <span className={styles.catalogBrand}>{brand.nome}</span>
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
                          <span className={styles.catalogBrand}>{brand.nome}</span>
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
          ))}

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
