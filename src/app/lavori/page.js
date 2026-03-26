'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './lavori.module.css';

const armadi = [
  {
    titolo: 'Camera da letto su misura',
    descrizione:
      'Ambiente notte progettato con materiali selezionati, luce calda e volumi equilibrati per un riposo di qualità.',
    img: '/images/armadio-01.webp',
  },
  {
    titolo: 'Armadio in mansarda',
    descrizione:
      'Soluzione su misura che sfrutta la forma del tetto, con ante integrate e massimo sfruttamento dello spazio disponibile.',
    img: '/images/armadio-02.webp',
  },
  {
    titolo: 'Cabina armadio',
    descrizione:
      'Cabina con ripiani aperti, cassetti e vani appendiabiti organizzati per avere tutto a portata di mano con ordine.',
    img: '/images/armadio-03.webp',
  },
  {
    titolo: 'Mobile soggiorno su misura',
    descrizione:
      'Parete attrezzata con base in legno chiaro, vani a giorno con pannello grigio e ante laccate grigio chiaro per la zona TV.',
    img: '/images/armadio-10.webp',
  },
  {
    titolo: 'Letto e camera coordinata',
    descrizione:
      'Composizione notte con letto coordinato e finiture abbinate, pensata per mantenere equilibrio visivo e continuità materica.',
    img: '/images/armadio-11.webp',
  },
];

const cucine = [
  // pos 1
  {
    titolo: 'Cucina lineare con rivestimento grigio',
    descrizione:
      'Composizione lineare con rivestimento in gres grigio a tutta parete, piani profondi e volumi bilanciati per un ambiente funzionale e di carattere.',
    img: '/images/cucina-01.webp',
  },
  // pos 2
  {
    titolo: 'Cucina a colonne bianche con tavolo e sedie De Padova',
    descrizione:
      'Colonne a tutta altezza in laccato bianco opaco accompagnate da un tavolo in tinta e sedie De Padova: un progetto coordinato nei volumi e nei materiali, dove il design italiano si esprime con eleganza e coerenza formale.',
    img: '/images/cucina-03.webp',
  },
  // pos 3
  {
    titolo: 'Cucina con colonne nere e isola',
    descrizione:
      'Colonne a tutta altezza in laccato nero opaco affiancano un\'isola centrale dal design deciso, per una cucina dal forte carattere visivo e dalla grande personalità.',
    img: '/images/cucina-04.webp',
  },
  // pos 4
  {
    titolo: 'Cucina in stile country',
    descrizione:
      'Ante in legno naturale, maniglie in ferro, piano in pietra e dettagli artigianali per un ambiente autentico, caldo e senza tempo.',
    img: '/images/cucina-05.webp',
  },
  // pos 5
  {
    titolo: 'Cucina ad angolo con piano in marmo',
    descrizione:
      'Cucina ad angolo con piano di lavoro e schienale in marmo naturale, frontali laccati e finiture ricercate per un risultato elegante e durevole.',
    img: '/images/cucina-06.webp',
  },
  // pos 6
  {
    titolo: 'Cucina lineare con specchio',
    descrizione:
      'Cucina lineare con specchio a tutta altezza posizionato sopra lo schienale, che amplifica la luminosità e dona profondità visiva all\'intero ambiente.',
    img: '/images/cucina-08.webp',
  },
  // pos 7
  {
    titolo: 'Cucina ad angolo laccata lucida',
    descrizione:
      'Cucina ad angolo con frontali in laccato lucido che riflettono la luce e valorizzano ogni dettaglio, per un risultato sofisticato e contemporaneo.',
    img: '/images/cucina-09.webp',
  },
  // pos 8
  {
    titolo: 'Cucina a doppia profondità',
    descrizione:
      'Composizione su misura con doppia profondità di piano, impreziosita da una gola e maniglia nera in netto contrasto con il bianco: un dettaglio progettuale che unisce rigore formale e carattere, per una cucina dall\'identità forte e contemporanea.',
    img: '/images/cucina-10.webp',
  },
  // pos 9
  {
    titolo: 'Cucina ad angolo laccata bianca',
    descrizione:
      'Cucina ad angolo interamente in laccato bianco opaco, con linee pulite e volumi ordinati che creano un ambiente luminoso, armonioso e di grande eleganza.',
    img: '/images/cucina-11.webp',
  },
  // pos 10
  {
    titolo: 'Cucina classica grigia',
    descrizione:
      'Cucina classica in grigio con ante fresate e gola in tono beige che esalta il disegno del frontale, donando un accento caldo e raffinato al grigio della composizione per un risultato elegante e di grande personalità.',
    img: '/images/cucina-12.webp',
  },
  // pos 11
  {
    titolo: 'Cucina classica laccata bianca',
    descrizione:
      'Composizione classica interamente in laccato bianco con apertura a gola in tono: un dettaglio discreto ed elegante che valorizza la pulizia delle linee senza alterare l\'armonia del bianco totale.',
    img: '/images/cucina-13.webp',
  },
  // pos 12
  {
    titolo: 'Cucina lineare con tavolo di design',
    descrizione:
      'Cucina lineare integrata con tavolo e sedie di design architettonico, dove ogni elemento è stato studiato per dialogare in perfetta armonia formale e funzionale.',
    img: '/images/cucina-14.webp',
  },
  // pos 13
  {
    titolo: 'Cucina con cappa a vista e vano in legno',
    descrizione:
      'Composizione bianca valorizzata da una cappa dalla forma scultorea e dal forte impatto estetico, arricchita da un vano a giorno in finitura legno che crea un caldo contrasto materico sul bianco dominante.',
    img: '/images/cucina-15.webp',
  },
  // pos 14
  {
    titolo: 'Cucina nera con piastrelle siciliane',
    descrizione:
      'Cucina su misura in nero opaco con schienale in piastrelle siciliane decorate, per un connubio unico tra contemporaneità e tradizione artigianale del Sud Italia.',
    img: '/images/cucina-16.webp',
  },
  // pos 15
  {
    titolo: 'Cucina con isola e top in HPL',
    descrizione:
      'Basi in laccato bianco e colonne a tutta altezza in nero opaco definiscono un contrasto netto e sofisticato, completato da un\'isola centrale con top in HPL: un materiale tecnico di alta resistenza che unisce estetica e durabilità.',
    img: '/images/cucina-17.webp',
  },
];

function Carousel({ items, label, eyebrow }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = useMemo(
    () => [items[items.length - 1], ...items, items[0]],
    [items]
  );

  const realIndex =
    currentIndex === 0
      ? items.length - 1
      : currentIndex === items.length + 1
      ? 0
      : currentIndex - 1;

  const goTo = (target) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionEnabled(true);
    setCurrentIndex(target);
  };

  const goToNext = () => goTo(currentIndex + 1);
  const goToPrev = () => goTo(currentIndex - 1);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(items.length);
    }
    setIsAnimating(false);
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [transitionEnabled]);

  return (
    <div className={styles.carouselBlock}>
      <div className={styles.carouselTop}>
        <div>
          <span className={styles.carouselEyebrow}>{eyebrow}</span>
          <h2 className={styles.carouselTitle}>{label}</h2>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={goToPrev}
            aria-label="Precedente"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={goToNext}
            aria-label="Successivo"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.carouselViewport}>
        <div
          className={`${styles.carouselTrack} ${
            transitionEnabled ? styles.trackAnimated : styles.trackStatic
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, index) => (
            <article
              key={`${item.img}-${index}`}
              className={styles.slide}
              role="group"
              aria-label={`Slide ${index + 1} di ${slides.length}`}
            >
              <Image
                src={item.img}
                alt={item.titolo}
                width={1080}
                height={1440}
                sizes="(max-width: 768px) 100vw, 600px"
                priority={index <= 1}
                className={styles.slideImage}
              />

              <div className={styles.slideOverlay} />

              <div className={styles.slideContent}>
                <span className={styles.slideCounter}>
                  {String(realIndex + 1).padStart(2, '0')} /{' '}
                  {String(items.length).padStart(2, '0')}
                </span>
                <h3 className={styles.slideTitle}>{item.titolo}</h3>
                <p className={styles.slideDesc}>{item.descrizione}</p>
              </div>

              <div className={styles.slideControls}>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={goToPrev}
                  aria-label="Precedente"
                >
                  ←
                </button>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={goToNext}
                  aria-label="Successivo"
                >
                  →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.dots} aria-label="Indicatori slide">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index + 1)}
            className={`${styles.dot} ${
              realIndex === index ? styles.dotActive : ''
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LavoriPage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 0);
    return () => clearTimeout(timer);
  }, []);

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

          <section className={styles.introRow}>
            <div className={styles.introCard}>
              <span className={styles.introEyebrow}>I nostri lavori</span>
              <h2 className={styles.introTitle}>Ogni progetto è unico</h2>
              <p className={styles.introText}>
                Queste realizzazioni mostrano come cucine, armadi e ambienti
                completi vengono trasformati attraverso una progettazione attenta
                agli spazi, ai materiali e alle esigenze di chi li abita.
              </p>
            </div>

            <div className={styles.introStats}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Su misura</span>
                <span className={styles.statLabel}>
                  Ogni progetto adattato allo spazio reale
                </span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Dettaglio</span>
                <span className={styles.statLabel}>
                  Cura nella scelta di materiali e finiture
                </span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>Consulenza</span>
                <span className={styles.statLabel}>
                  Accompagnamento dal progetto alla posa
                </span>
              </div>
            </div>
          </section>

          <section className={styles.carouselsRow}>
            <Carousel
              items={armadi}
              eyebrow="Ambienti su misura"
              label="Armadi, cabine e soggiorni"
            />
            <Carousel
              items={cucine}
              eyebrow="Il cuore della casa"
              label="Cucine e zone pranzo"
            />
          </section>

          <section className={styles.ctaSection}>
            <div className={styles.ctaBox}>
              <div>
                <h2 className={styles.ctaTitle}>Vuoi un progetto simile?</h2>
                <p className={styles.ctaText}>
                  Passa in showroom o contattaci per parlare del tuo spazio.
                  Progettiamo insieme una soluzione su misura per te.
                </p>
              </div>
              <Link href="/contatti" className={styles.ctaLink}>
                Richiedi una consulenza
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
