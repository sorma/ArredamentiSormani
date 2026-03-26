'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './prodotti.module.css';

export default function ProdottiPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const categorie = [
    {
      nome: 'Cucine',
      descrizione:
        'Progettiamo cucine capaci di unire estetica, funzionalità e qualità dei materiali, con soluzioni studiate per adattarsi in modo armonioso a ogni ambiente.',
      href: '/cucine',
      cta: 'Scopri le cucine',
      brands: [
        {
          nome: 'Arredo3',
          logo: '/images/Arredo3.webp',
        },
      ],
    },
    {
      nome: 'Armadi',
      descrizione:
        'Proponiamo armadiature eleganti e versatili, pensate per organizzare al meglio la zona notte con finiture curate, modularità e coerenza stilistica.',
      href: '/armadi',
      cta: 'Scopri gli armadi',
      brands: [
        {
          nome: 'Elli',
          logo: '/images/Elli.webp',
        },
        {
          nome: 'Battistella',
          logo: '/images/Battistella.webp',
        },
      ],
    },
    {
      nome: 'Piani da lavoro',
      descrizione:
        'Completiamo i progetti cucina con superfici affidabili e attuali, selezionate per offrire resistenza, pulizia formale e continuità estetica.',
      href: '/piani',
      cta: 'Scopri i piani da lavoro',
      brands: [
        {
          nome: 'Solid Top',
          logo: '/images/Solidtop.webp',
        },
        {
          nome: 'Vallmar',
          logo: '/images/Vallmar.webp',
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
              Prodotti e marchi
              <br />
              per arredare con qualità
            </h1>

            <p className={styles.subtitle}>
              Una selezione di aziende affidabili per cucine, armadi e piani da
              lavoro, scelta per offrire soluzioni coerenti, eleganti e adatte a
              diversi stili abitativi.
            </p>
          </section>

          <section className={styles.grid}>
            {categorie.map((categoria) => (
              <article className={styles.card} key={categoria.nome}>
                <div className={styles.cardTop}>
                  <span className={styles.sectionLabel}>Categoria</span>
                  <h2 className={styles.cardTitle}>{categoria.nome}</h2>
                </div>

                <div className={styles.logoBlock}>
                  <span className={styles.brandLabel}>Brand trattati</span>

                  <div className={styles.logoGrid}>
                    {categoria.brands.map((brand) => (
                      <div className={styles.logoItem} key={brand.nome}>
                        <div className={styles.logoVisual}>
                          <Image
                            src={brand.logo}
                            alt={brand.nome}
                            fill
                            className={styles.brandLogo}
                            sizes="220px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className={styles.cardDesc}>{categoria.descrizione}</p>

                <Link href={categoria.href} className={styles.cardButton}>
                  {categoria.cta}
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
