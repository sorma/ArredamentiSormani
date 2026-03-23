'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
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

      <main className={styles.page}>
        <section
          className={`${styles.heroSection} ${
            showPage ? styles.pageVisible : styles.pageHidden
          }`}
        >
          <div className={styles.heroShell}>
            <div className={styles.heroBackground}>
              <Image
                src="/images/cucina1.webp"
                alt="Cucina moderna Arredamenti Sormani"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className={styles.heroImage}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Spazi pensati
                  <br />
                  per farsi vivere
                </h1>

                <p className={styles.heroText}>
                  Cucine, armadi e soluzioni d’arredo su misura progettate per dare
                  carattere, equilibrio e funzionalità alla tua casa.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="/cucine" className={styles.primaryButton}>
                    Esplora le cucine
                  </Link>
                  <Link href="/armadi" className={styles.secondaryButton}>
                    Scopri gli armadi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.introSection}>
            <span className={styles.sectionEyebrow}>Perché noi</span>
            <h2 className={styles.sectionTitle}>
              Progettiamo ambienti da vivere ogni giorno
            </h2>
            <p className={styles.sectionSubtitle}>
              Ogni soluzione nasce dall’incontro tra gusto estetico, funzionalità
              e attenzione concreta agli spazi della tua casa.
            </p>

            <div className={styles.featureGrid}>
              <article className={styles.featureCard}>
                <div className={styles.iconWrap}>
                  <Image
                    src="/images/designIcon.svg"
                    alt="Design"
                    width={42}
                    height={42}
                  />
                </div>
                <h3>Design su misura</h3>
                <p>
                  Progetti studiati per adattarsi perfettamente agli spazi e allo
                  stile di chi li vive.
                </p>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.iconWrap}>
                  <Image
                    src="/images/qualitaIcon.svg"
                    alt="Qualità"
                    width={42}
                    height={42}
                  />
                </div>
                <h3>Materiali di qualità</h3>
                <p>
                  Materiali selezionati con cura per offrire durata, solidità ed
                  eleganza nel tempo.
                </p>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.iconWrap}>
                  <Image
                    src="/images/assistenzaIcon.svg"
                    alt="Assistenza"
                    width={42}
                    height={42}
                  />
                </div>
                <h3>Assistenza completa</h3>
                <p>
                  Seguiamo ogni fase del lavoro, dal primo confronto fino al
                  montaggio finale.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.servicesHeader}>
              <div>
                <span className={styles.sectionEyebrow}>Servizi</span>
                <h2 className={styles.sectionTitle}>
                  Un servizio completo, dall’idea alla realizzazione
                </h2>
              </div>

              <p className={styles.servicesLead}>
                Ti accompagniamo in ogni fase del progetto con un approccio
                preciso, concreto e curato in ogni dettaglio.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              <article className={styles.serviceCard}>
                <span className={styles.serviceNumber}>01</span>
                <h3>Progettazione</h3>
                <p>
                  Studiamo insieme la soluzione ideale con proposte personalizzate,
                  funzionali e coerenti con i tuoi ambienti.
                </p>
              </article>

              <article className={styles.serviceCard}>
                <span className={styles.serviceNumber}>02</span>
                <h3>Rilievo misure</h3>
                <p>
                  Effettuiamo rilievi precisi per garantire una realizzazione
                  perfetta e senza imprevisti.
                </p>
              </article>

              <article className={styles.serviceCard}>
                <span className={styles.serviceNumber}>03</span>
                <h3>Consegna e montaggio</h3>
                <p>
                  Completiamo il progetto con consegna, installazione e attenzione
                  ai dettagli finali.
                </p>
              </article>
            </div>
          </section>

          <section className={styles.storySection}>
            <div className={styles.storyImageWrap}>
              <Image
                src="/images/cucina2.webp"
                alt="Interno elegante arredato"
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                className={styles.storyImage}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.storyContent}>
              <span className={styles.storyEyebrow}>La nostra visione</span>
              <h2 className={styles.storyTitle}>
                Eleganza, funzionalità e carattere in ogni progetto
              </h2>
              <p className={styles.storyParagraph}>
                Realizziamo spazi pensati per durare nel tempo, con soluzioni su
                misura capaci di unire estetica, comfort e praticità quotidiana.
              </p>
              <p className={styles.storyText}>
                Il nostro obiettivo è trasformare ogni ambiente in qualcosa di
                autentico, personale e armonioso.
              </p>

              <div className={styles.storyActions}>
                <Link href="/lavori" className={styles.storyPrimary}>
                  Guarda i nostri lavori
                </Link>
                <Link href="/contatti" className={styles.storySecondary}>
                  Contattaci
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
