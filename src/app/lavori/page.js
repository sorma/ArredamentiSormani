'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './lavori.module.css';

export default function CucinePage() {
  const cucine = [
    {
      titolo: 'Cucina Moderna',
      descrizione: 'Design innovativo per ambienti dinamici.',
      img: '/images/image0.webp',
    },
    {
      titolo: 'Cucina Classica',
      descrizione: 'Eleganza senza tempo e materiali pregiati.',
      img: '/images/image1.jpeg',
    },
    {
      titolo: 'Cucina Minimal',
      descrizione: 'Linee pulite e colori neutri.',
      img: '/images/image2.jpeg',
    },
    {
      titolo: 'Cucina Rustica',
      descrizione: 'Legno naturale e atmosfera calda.',
      img: '/images/image3.jpeg',
    },
    {
      titolo: 'Cucina con Isola',
      descrizione: 'Perfetta per cucinare e socializzare.',
      img: '/images/image4.jpeg',
    },
    {
      titolo: 'Cucina Open Space',
      descrizione: 'Integrazione perfetta con il soggiorno.',
      img: '/images/image5.jpeg',
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.container}>
        <h1 className={styles.title}>I Nostri Lavori</h1>
        <p className={styles.subtitle}>Scopri le cucine più amate, tra design moderno e funzionalità.</p>

        <div className={styles.grid}>
          {cucine.map((cucina, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
<Image
  src={cucina.img}
  alt={cucina.titolo}
  width={1200}
  height={800}
  unoptimized
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
