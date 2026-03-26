'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './piani.module.css';

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

export default function PianiPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const brandSections = [
    {
      nome: 'Solid Top',
      logo: '/images/Solidtop.webp',
      alt: 'Logo Solid Top',
      testo1:
        'Solid Top è un\'azienda leader nella produzione di piani da lavoro per cucina e bagno, nata dall\'esigenza di unire praticità, resistenza e un\'estetica emozionale in un prodotto innovativo e di design.',
      testo2:
        'La profonda esperienza nella lavorazione dell\'HPL stratificato ha permesso di sviluppare una tecnologia produttiva unica, capace di affiancare allo studio dei materiali una ricerca esclusiva di finiture. La gamma si completa con superfici in Solid Surface, Corian DuPont e Betacryl.',
      punti: [
        'HPL stratificato con spessori da 20 a 160 mm',
        'Impermeabilità assoluta e resistenza fino a 180 °C',
        'Piani senza giunte grazie a lastre di grande formato',
        'Vasche integrate in HPL o acciaio inox',
        'Solid Surface, Corian DuPont e Betacryl',
      ],
      stats: [
        { valore: 'HPL', label: 'Materiale tecnico ad alta resistenza' },
        { valore: '180 °C', label: 'Temperatura massima sopportata' },
        { valore: 'Su misura', label: 'Piani tagliati e lavorati su progetto' },
        { valore: 'Senza giunte', label: 'Lastre di grande formato senza interruzioni' },
      ],
      nota: 'Solid Top si distingue per una produzione capace di rispondere alle esigenze del progettista e del cliente finale: materiali tecnici di altissima qualità, finiture esclusive e soluzioni personalizzate che completano ogni cucina con precisione e carattere.',
      linkBrand: 'https://www.solid-top.com',
      cataloghi: [
        {
          titolo: 'Scopri Solid Top',
          descrizione:
            'Visita il sito ufficiale per conoscere la proposta completa: tipologie di piano, finiture, spessori disponibili e soluzioni con vasca integrata.',
          link: 'https://www.solid-top.com',
          esterno: true,
          icona: 'catalogo',
        },
        {
          titolo: 'Richiedi informazioni',
          descrizione:
            'Contattaci per ricevere una consulenza personalizzata e scoprire i materiali disponibili per il tuo progetto cucina.',
          link: '/contatti',
          esterno: false,
          icona: 'contatti',
        },
      ],
    },
    {
      nome: 'Vallmar',
      logo: '/images/Vallmar.webp',
      alt: 'Logo Vallmar',
      testo1:
        'Vallmar è un\'azienda con oltre 50 anni di esperienza nella lavorazione artigianale di marmi, graniti, pietre e onici, con sede a Meda. Un riferimento solido per chi cerca superfici naturali di qualità per la cucina e l\'arredo.',
      testo2:
        'L\'azienda unisce la tradizione familiare all\'innovazione tecnologica, offrendo piani da lavoro su misura in pietra naturale con una cura artigianale nei dettagli che si traduce in prodotti unici, durevoli e di grande valore estetico.',
      punti: [
        'Oltre 50 anni di esperienza nella lavorazione della pietra',
        'Marmi, graniti, pietre e onici selezionati',
        'Lavorazione artigianale su misura',
        'Tradizione familiare e innovazione tecnologica',
        'Materiali di origine naturale con qualità garantita',
      ],
      stats: [
        { valore: '50+', label: 'Anni di esperienza artigianale' },
        { valore: 'Naturale', label: 'Marmi, graniti, pietre e onici' },
        { valore: 'Su misura', label: 'Ogni piano lavorato su progetto' },
        { valore: 'Meda', label: 'Radici artigianali nel cuore della Brianza' },
      ],
      nota: 'Vallmar porta nel progetto cucina il valore della pietra naturale lavorata con cura artigianale: ogni piano è un pezzo unico, selezionato nei materiali e rifinito nei dettagli per offrire una superficie dal carattere autentico e senza tempo.',
      linkBrand: 'https://www.vallmar.it',
      cataloghi: [
        {
          titolo: 'Scopri Vallmar',
          descrizione:
            'Visita il sito ufficiale per conoscere la proposta completa di marmi, graniti e pietre naturali disponibili su misura.',
          link: 'https://www.vallmar.it',
          esterno: true,
          icona: 'catalogo',
        },
        {
          titolo: 'Richiedi informazioni',
          descrizione:
            'Contattaci per ricevere una consulenza personalizzata e scoprire i materiali disponibili per il tuo progetto cucina.',
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
              Piani da lavoro
              <br />
              per ogni progetto cucina
            </h1>

            <p className={styles.subtitle}>
              Superfici selezionate per completare ogni composizione con
              materiali di qualità, finiture ricercate e soluzioni pensate per
              durare nel tempo senza rinunciare all&apos;estetica.
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
                    priority={brand.nome === 'Solid Top'}
                  />
                </div>

                <div className={styles.brandContent}>
                  <span className={styles.brandEyebrow}>Brand partner</span>

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
                          <IconCatalogo />
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
        </div>
      </main>

      <Footer />
    </>
  );
}
