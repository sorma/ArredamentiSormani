'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <Image
              src="/images/cucina1.webp"
              alt="Bellissimi mobili per la tua casa"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Trasforma la Tua Casa con Stile</h1>
            <p>Scopri la nostra vasta selezione di cucine moderne e armadi eleganti per creare gli spazi che hai sempre sognato.</p>
            <div className={styles.heroButtons}>
              <Link href="/cucine" className={styles.heroButtonPrimary}>Esplora le Cucine</Link>
              <Link href="/armadi" className={styles.heroButtonSecondary}>Scopri gli Armadi</Link>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Perché Scegliere Arredamenti Sormani</h2>
          <div className={styles.featureRow}>
            <div className={styles.featureBox}>
              <Image src="/images/designIcon.svg" alt="Design" width={60} height={60} />
              <h3>Design su Misura</h3>
              <p>Progettiamo cucine e armadi che si adattano perfettamente al tuo spazio.</p>
            </div>
            <div className={styles.featureBox}>
              <Image src="/images/qualitaIcon.svg" alt="Qualità" width={60} height={60} />
              <h3>Materiali di Qualità</h3>
              <p>Solo materiali selezionati per garantire durata ed eleganza.</p>
            </div>
            <div className={styles.featureBox}>
              <Image src="/images/assistenzaIcon.svg" alt="Assistenza" width={60} height={60} />
              <h3>Assistenza Completa</h3>
              <p>Dal progetto al montaggio, ti seguiamo in ogni fase.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>I Nostri Servizi</h2>
          <div className={styles.featureRow}>
            <div className={styles.featureBox}>
              <Image src="/images/progettazioneIcon.svg" alt="Progettazione" width={60} height={60} className={styles.icon} />
              <h3>Progettazione</h3>
              <p>Studiamo insieme la tua soluzione ideale con disegni personalizzati.</p>
            </div>
            <div className={styles.featureBox}>
              <Image src="/images/rilievoIcon.svg" alt="Rilievo" width={60} height={60} className={styles.icon} />
              <h3>Rilievo Misure</h3>
              <p>Un tecnico dedicato viene a casa tua per prendere misure precise.</p>
            </div>
            <div className={styles.featureBox}>
              <Image src="/images/trasportoIcon.svg" alt="Montaggio" width={60} height={60} className={styles.icon} />
              <h3>Consegna & Montaggio</h3>
              <p>Servizio completo con trasporto e montaggio incluso.</p>
            </div>
          </div>
        </div>

        <div className={styles.storySection}>
  <div className={styles.storyBox}>
    <h2 className={styles.storyTitle}>La Nostra Storia</h2>
    <p className={styles.storyParagraph}>
      Da oltre 30 anni Arredamenti Sormani porta qualità e stile nelle case italiane. 
      La nostra passione per il design e lartigianalità ci guida ogni giorno, offrendo soluzioni su misura per ogni esigenza. 
      Ogni casa ha una storia unica, e noi siamo qui per scriverla insieme a te.
    </p>
    <p className={styles.storyText}>
      Cresciuti con il sogno di offrire spazi che raccontano la personalità di chi li vive, ci impegniamo a trasformare ogni progetto in una realtà su misura.
    </p>
  </div>
</div>



      </main>

      <Footer />
    </div>
  );
}
