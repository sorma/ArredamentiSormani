import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './terms.module.css';

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Termini e Condizioni</h1>
            <p className={styles.updated}>Ultimo aggiornamento: Marzo 2026</p>
            <p className={styles.subtitle}>
              I presenti Termini e Condizioni disciplinano l’accesso e l’utilizzo
              del sito web di Arredamenti Sormani.
            </p>
          </section>

          <section className={styles.content}>
            <section className={styles.card}>
              <h2>1. Oggetto</h2>
              <p>
                Il sito ha finalità esclusivamente informative e di presentazione
                dei servizi e delle realizzazioni di Arredamenti Sormani.
              </p>
              <p>
                La navigazione del sito implica l’accettazione delle presenti
                condizioni d’uso.
              </p>
            </section>

            <section className={styles.card}>
              <h2>2. Utilizzo del sito</h2>
              <p>
                L’utente si impegna a utilizzare il sito in modo lecito, corretto
                e conforme alla normativa applicabile.
              </p>
              <p>
                Non è consentito utilizzare il sito per attività che possano
                comprometterne il funzionamento, la sicurezza o i contenuti.
              </p>
            </section>

            <section className={styles.card}>
              <h2>3. Proprietà intellettuale</h2>
              <p>
                Testi, immagini, loghi, elementi grafici e contenuti presenti sul
                sito sono riservati e, salvo diversa indicazione, appartengono ad
                Arredamenti Sormani o ai rispettivi titolari dei diritti.
              </p>
              <p>
                Non è consentita la copia, riproduzione, distribuzione o riutilizzo
                dei contenuti senza preventiva autorizzazione scritta.
              </p>
            </section>

            <section className={styles.card}>
              <h2>4. Accuratezza delle informazioni</h2>
              <p>
                Arredamenti Sormani si impegna a mantenere aggiornate e corrette
                le informazioni pubblicate sul sito.
              </p>
              <p>
                Tuttavia, i contenuti hanno finalità informativa e possono essere
                modificati, aggiornati o rimossi in qualsiasi momento senza preavviso.
              </p>
            </section>

            <section className={styles.card}>
              <h2>5. Link esterni</h2>
              <p>
                Il sito può contenere collegamenti a pagine o servizi esterni,
                come ad esempio mappe o altri siti di terzi.
              </p>
              <p>
                Arredamenti Sormani non è responsabile dei contenuti, della
                disponibilità o delle politiche adottate da tali siti esterni.
              </p>
            </section>

            <section className={styles.card}>
              <h2>6. Limitazione di responsabilità</h2>
              <p>
                Nei limiti consentiti dalla legge, Arredamenti Sormani non potrà
                essere ritenuta responsabile per danni derivanti dall’uso del sito,
                da eventuali interruzioni del servizio o da errori presenti nei contenuti.
              </p>
            </section>

            <section className={styles.card}>
              <h2>7. Modifiche ai termini</h2>
              <p>
                Arredamenti Sormani si riserva il diritto di modificare in qualsiasi
                momento i presenti Termini e Condizioni.
              </p>
              <p>
                Le eventuali modifiche saranno efficaci dalla data di pubblicazione
                su questa pagina.
              </p>
            </section>

            <section className={styles.card}>
              <h2>8. Legge applicabile</h2>
              <p>
                I presenti Termini e Condizioni sono regolati dalla legge italiana,
                salvo diversa disposizione inderogabile di legge.
              </p>
            </section>

            <section className={styles.card}>
              <h2>9. Contatti</h2>
              <p>
                Per informazioni relative a questi Termini e Condizioni è possibile
                contattare Arredamenti Sormani tramite i recapiti indicati nella
                pagina Contatti del sito.
              </p>
            </section>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
