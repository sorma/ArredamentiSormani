import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './privacy.module.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Ultimo aggiornamento: Marzo 2026</p>
            <p className={styles.subtitle}>
              Questa informativa descrive il trattamento dei dati personali degli utenti
              che visitano il sito di Arredamenti Sormani o contattano l’azienda tramite
              i recapiti pubblicati sul sito.
            </p>
          </section>

          <section className={styles.content}>
            <section className={styles.card}>
              <h2>1. Titolare del trattamento</h2>
              <p>
                Il Titolare del trattamento è <strong>Arredamenti Sormani</strong>,
                con sede in Via Circonvallazione 14, Asso (CO).
              </p>
            </section>

            <section className={styles.card}>
              <h2>2. Dati trattati</h2>
              <p>
                Durante la normale navigazione del sito possono essere trattati dati tecnici
                come indirizzo IP, tipo di dispositivo, browser utilizzato e altri dati
                necessari al corretto funzionamento delle pagine web.
              </p>
              <p>
                Possono inoltre essere trattati i dati comunicati volontariamente dall’utente
                tramite email, telefono o altri recapiti indicati sul sito.
              </p>
            </section>

            <section className={styles.card}>
              <h2>3. Finalità del trattamento</h2>
              <p>I dati sono trattati esclusivamente per:</p>
              <ul>
                <li>consentire il corretto funzionamento del sito;</li>
                <li>rispondere a richieste di informazioni o contatto;</li>
                <li>gestire comunicazioni relative ai servizi offerti dall’azienda;</li>
                <li>adempiere a eventuali obblighi di legge.</li>
              </ul>
            </section>

            <section className={styles.card}>
              <h2>4. Base giuridica</h2>
              <p>
                Il trattamento si basa sul legittimo interesse del Titolare al funzionamento
                del sito, sulla necessità di rispondere alle richieste dell’interessato e,
                quando applicabile, sull’adempimento di obblighi di legge.
              </p>
            </section>

            <section className={styles.card}>
              <h2>5. Modalità di trattamento</h2>
              <p>
                I dati sono trattati con strumenti informatici e misure organizzative adeguate,
                nel rispetto dei principi di liceità, correttezza, pertinenza e sicurezza.
              </p>
            </section>

            <section className={styles.card}>
              <h2>6. Comunicazione dei dati</h2>
              <p>
                I dati non vengono diffusi. Possono essere trattati da soggetti che forniscono
                supporto tecnico per il funzionamento del sito, nei limiti necessari alla gestione
                del servizio.
              </p>
            </section>

            <section className={styles.card}>
              <h2>7. Conservazione dei dati</h2>
              <p>
                I dati sono conservati per il tempo strettamente necessario al perseguimento
                delle finalità per cui sono stati raccolti e comunque nel rispetto della normativa applicabile.
              </p>
            </section>

            <section className={styles.card}>
              <h2>8. Diritti dell’interessato</h2>
              <p>
                L’utente può esercitare i diritti previsti dal Regolamento (UE) 2016/679,
                tra cui accesso, rettifica, cancellazione, limitazione del trattamento e opposizione,
                nei casi previsti dalla legge.
              </p>
              <p>
                L’utente può inoltre proporre reclamo al Garante per la protezione dei dati personali.
              </p>
            </section>

            <section className={styles.card}>
              <h2>9. Contatti</h2>
              <p>
                Per richieste relative al trattamento dei dati personali è possibile contattare
                Arredamenti Sormani tramite i recapiti indicati nella pagina Contatti del sito.
              </p>
            </section>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
