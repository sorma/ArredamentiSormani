'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './armadi.module.css';

export default function ArmadiPage() {
  const armadi = [
    {
      titolo: 'Armadio Spazioso',
      descrizione: 'Ampio spazio per organizzare ogni cosa con stile.',
      img: '/images/armadio1.webp',
    },
    {
      titolo: 'Cabina Armadio Elegante',
      descrizione: 'Un tocco di lusso per la tua camera da letto.',
      img: '/images/armadio2.webp',
    },
    {
      titolo: 'Armadio Scorrevole',
      descrizione: 'Design moderno e pratico per spazi ridotti.',
      img: '/images/armadio3.webp',
    },
    {
      titolo: 'Armadio su Misura',
      descrizione: 'Personalizzabile in ogni dettaglio.',
      img: '/images/armadio4.webp',
    },
    {
      titolo: 'Armadio Classico',
      descrizione: 'Eleganza tradizionale che non passa mai di moda.',
      img: '/images/armadio5.webp',
    },
    {
      titolo: 'Armadio a Specchio',
      descrizione: 'Perfetto per ampliare visivamente gli spazi.',
      img: '/images/armadio6.webp',
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <h1 className={styles.title}>I Nostri Armadi</h1>
        <p className={styles.subtitle}>Funzionalità, stile e soluzioni salvaspazio per ogni esigenza.</p>

        <div className={styles.grid}>
          {armadi.map((armadio, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={armadio.img}
                  alt={armadio.titolo}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{armadio.titolo}</h3>
                <p className={styles.cardDesc}>{armadio.descrizione}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
