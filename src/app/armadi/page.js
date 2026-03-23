'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './armadi.module.css';

export default function ArmadiPage() {
  const [showPage, setShowPage] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

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

      <main className={styles.page}>
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

          <section className={styles.grid}>
            {armadi.map((armadio, index) => (
              <article className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={armadio.img}
                    alt={armadio.titolo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
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
                  <h3 className={styles.cardTitle}>{armadio.titolo}</h3>
                  <p className={styles.cardDesc}>{armadio.descrizione}</p>
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
