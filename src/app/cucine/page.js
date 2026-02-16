'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './cucine.module.css';

export default function CucinePage() {
  const cucine = [
    {
      titolo: 'Cucina Moderna',
      descrizione: 'Design innovativo per ambienti dinamici.',
      img: '/images/cucina1.webp',
    },
    {
      titolo: 'Cucina Classica',
      descrizione: 'Eleganza senza tempo e materiali pregiati.',
      img: '/images/cucina3.webp',
    },
    {
      titolo: 'Cucina Minimal',
      descrizione: 'Linee pulite e colori neutri.',
      img: '/images/cucina4.webp',
    },
    {
      titolo: 'Cucina Rustica',
      descrizione: 'Legno naturale e atmosfera calda.',
      img: '/images/cucina5.webp',
    },
    {
      titolo: 'Cucina con Isola',
      descrizione: 'Perfetta per cucinare e socializzare.',
      img: '/images/cucina7.webp',
    },
    {
      titolo: 'Cucina Open Space',
      descrizione: 'Integrazione perfetta con il soggiorno.',
      img: '/images/cucina2.webp',
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <h1 className={styles.title}>Le Nostre Cucine</h1>
        <p className={styles.subtitle}>Scopri le cucine più amate, tra design moderno e funzionalità.</p>

        <div className={styles.grid}>
          {cucine.map((cucina, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={cucina.img}
                  alt={cucina.titolo}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cucina.titolo}</h3>
                <p className={styles.cardDesc}>{cucina.descrizione}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
