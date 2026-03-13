'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './cucine.module.css';

export default function CucinePage() {
  const [showPage, setShowPage] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

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

      <main className={styles.page}>
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
              Una selezione di soluzioni pensate per unire estetica, funzionalità
              e qualità, con progetti capaci di adattarsi davvero ai tuoi spazi.
            </p>
          </section>

          <section className={styles.grid}>
            {cucine.map((cucina, index) => (
              <article className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={cucina.img}
                    alt={cucina.titolo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [index]: true }))
                    }
                    className={`${styles.image} ${
                      loadedImages[index] ? styles.imgVisible : styles.imgHidden
                    }`}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay} />
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cucina.titolo}</h3>
                  <p className={styles.cardDesc}>{cucina.descrizione}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
