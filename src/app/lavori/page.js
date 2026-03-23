'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './lavori.module.css';

export default function LavoriPage() {
  const [showPage, setShowPage] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const lavori = [
    {
      titolo: 'Armadio su misura',
      descrizione: 'Soluzione progettata per organizzare lo spazio con ordine e pulizia visiva.',
      img: '/images/image0.webp',
    },
    {
      titolo: 'Camera con armadiatura',
      descrizione: 'Composizione elegante con armadi integrati e linee essenziali.',
      img: '/images/image1.jpeg',
    },
    {
      titolo: 'Armadio con libreria',
      descrizione: 'Progetto funzionale che unisce contenimento e vani a giorno.',
      img: '/images/image2.jpeg',
    },
    {
      titolo: 'Parete attrezzata',
      descrizione: 'Mobile su misura pensato per arredare la zona giorno con equilibrio.',
      img: '/images/image3.jpeg',
    },
    {
      titolo: 'Cucina con penisola',
      descrizione: 'Una soluzione pratica e conviviale, ideale per l’ambiente quotidiano.',
      img: '/images/image4.jpeg',
    },
    {
      titolo: 'Cucina lineare moderna',
      descrizione: 'Composizione dal carattere contemporaneo, essenziale e ben organizzata.',
      img: '/images/image5.jpeg',
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
              Realizzazioni pensate
              <br />
              con stile e carattere
            </h1>

            <p className={styles.subtitle}>
              Una selezione di ambienti progettati per unire estetica,
              funzionalità e attenzione ai dettagli, con soluzioni capaci di
              valorizzare davvero ogni spazio.
            </p>
          </section>

          <section className={styles.grid}>
            {lavori.map((lavoro, index) => (
              <article className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={lavoro.img}
                    alt={lavoro.titolo}
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
                  <h3 className={styles.cardTitle}>{lavoro.titolo}</h3>
                  <p className={styles.cardDesc}>{lavoro.descrizione}</p>
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
