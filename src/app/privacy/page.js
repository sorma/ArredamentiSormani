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
              Questa informativa descrive il trattamento dei dati personali
              degli utenti che visitano il sito di Arredamenti Sormani o
              contattano l'azienda tramite i recapiti pubblicati sul sito,
              in conformità al Regolamento (UE) 2016/679 (GDPR).
            </p>
          </section>

          <section className={styles.content}>

            <section className={styles.card}>
              <h2>1. Titolare del trattamento</h2>
              <p>
                Il Titolare del trattamento è <strong>Arredamenti Sormani</strong>,
                con sede in Via Circonvallazione 14, Asso (CO).
              </p>
              <p>
                Per qualsiasi richiesta relativa al trattamento dei dati personali
                è possibile contattare il Titolare all'indirizzo email{' '}
                <strong>arredamentisormani@virgilio.it</strong> oppure al numero{' '}
                <strong>+39 335 8310617</strong>.
              </p>
            </section>

            <section className={styles.card}>
              <h2>2. Tipologia di dati trattati</h2>
              <p>
                Il presente sito web ha finalità esclusivamente informative.{' '}
                <strong>
                  Non sono presenti moduli di contatto online, form di
                  iscrizione, newsletter o sistemi di acquisto.
                </strong>{' '}
                Non vengono raccolti dati personali tramite il sito.
              </p>
              <p>
                Durante la normale navigazione, i server e il provider di
                hosting possono registrare automaticamente dati tecnici di
                log, tra cui: indirizzo IP, tipo di dispositivo, browser
                utilizzato, pagine visitate e orario di accesso. Tali dati
                sono trattati in forma anonima o aggregata e servono
                esclusivamente a garantire il corretto funzionamento del sito.
              </p>
              <p>
                Possono inoltre essere trattati i dati comunicati
                volontariamente dall'utente tramite email o telefono (nome,
                recapito, contenuto della richiesta), utilizzati unicamente
                per rispondere alla comunicazione ricevuta.
              </p>
            </section>

            <section className={styles.card}>
              <h2>3. Finalità del trattamento</h2>
              <p>I dati sono trattati esclusivamente per:</p>
              <ul>
                <li>consentire il corretto funzionamento e la sicurezza del sito;</li>
                <li>rispondere a richieste di informazioni o di appuntamento
                    ricevute via email o telefono;</li>
                <li>gestire comunicazioni relative ai servizi offerti;</li>
                <li>adempiere a eventuali obblighi di legge.</li>
              </ul>
            </section>

            <section className={styles.card}>
              <h2>4. Base giuridica</h2>
              <p>
                Il trattamento dei dati tecnici di navigazione si basa sul
                legittimo interesse del Titolare al corretto funzionamento
                del sito (art. 6.1.f GDPR).
              </p>
              <p>
                Il trattamento dei dati comunicati volontariamente via email
                o telefono si basa sul consenso implicito dell'interessato
                che instaura la comunicazione (art. 6.1.b GDPR) e sulla
                necessità di riscontrare la richiesta ricevuta.
              </p>
            </section>

            <section className={styles.card}>
              <h2>5. Modalità di trattamento</h2>
              <p>
                I dati sono trattati con strumenti informatici e misure
                organizzative adeguate a garantirne la sicurezza, nel rispetto
                dei principi di liceità, correttezza, pertinenza e
                minimizzazione previsti dal GDPR.
              </p>
            </section>

            <section className={styles.card}>
              <h2>6. Soggetti terzi e responsabili del trattamento</h2>
              <p>
                I dati non vengono diffusi né ceduti a terzi per finalità
                commerciali o di marketing.
              </p>
              <p>
                Il sito è ospitato su infrastrutture di{' '}
                <strong>Cloudflare, Inc.</strong> (101 Townsend St, San Francisco,
                CA 94107, USA), che può trattare dati tecnici di log nell'ambito
                della fornitura del servizio di hosting e CDN, in qualità di
                responsabile del trattamento ai sensi dell'art. 28 GDPR. Il
                trasferimento dei dati verso gli USA avviene nel rispetto delle
                garanzie previste dal GDPR. Per maggiori informazioni:{' '}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy di Cloudflare
                </a>
                .
              </p>
              <p>
                La pagina Contatti contiene un collegamento al servizio{' '}
                <strong>Google Maps</strong> (Google LLC). L'attivazione di
                tale collegamento comporta il trasferimento di dati a Google
                secondo la propria{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                , sulla quale Arredamenti Sormani non esercita alcun controllo.
              </p>
            </section>

            <section className={styles.card}>
              <h2>7. Conservazione dei dati</h2>
              <p>
                I dati tecnici di log vengono conservati per il tempo
                strettamente necessario alle finalità di sicurezza e
                funzionamento del sito, generalmente non superiore a{' '}
                <strong>12 mesi</strong>, salvo obblighi di legge.
              </p>
              <p>
                I dati comunicati volontariamente via email o telefono vengono
                conservati per il tempo necessario a gestire la comunicazione
                e, successivamente, per un periodo non superiore a{' '}
                <strong>24 mesi</strong>, salvo che emerga la necessità di
                conservarli per adempiere a obblighi contrattuali o di legge.
              </p>
            </section>

            <section className={styles.card}>
              <h2>8. Diritti dell'interessato</h2>
              <p>
                L'utente può esercitare in qualsiasi momento i diritti
                previsti dagli artt. 15–22 del GDPR, tra cui: accesso ai
                propri dati, rettifica, cancellazione, limitazione del
                trattamento, portabilità e opposizione.
              </p>
              <p>
                Le richieste possono essere inviate direttamente al Titolare
                all'indirizzo email{' '}
                <strong>arredamentisormani@virgilio.it</strong>. Il Titolare
                risponderà entro 30 giorni dalla ricezione della richiesta,
                come previsto dal GDPR.
              </p>
              <p>
                L'utente ha inoltre il diritto di proporre reclamo al{' '}
                <strong>Garante per la protezione dei dati personali</strong>{' '}
                (
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.garanteprivacy.it
                </a>
                ) qualora ritenga che il trattamento dei propri dati violi
                la normativa vigente.
              </p>
            </section>

            <section className={styles.card}>
              <h2>9. Cookie</h2>
              <p>
                Il sito utilizza esclusivamente{' '}
                <strong>cookie tecnici</strong> necessari al corretto
                funzionamento delle pagine (ad esempio per gestire la
                sessione di navigazione). Non vengono utilizzati cookie di
                profilazione, tracciamento o marketing di alcun tipo.
              </p>
              <p>
                Non è richiesto il consenso dell'utente per i cookie
                strettamente tecnici, ai sensi del Provvedimento del Garante
                Privacy dell'8 maggio 2014 e delle Linee guida sui cookie
                del 10 giugno 2021.
              </p>
            </section>

            <section className={styles.card}>
              <h2>10. Modifiche alla Privacy Policy</h2>
              <p>
                Arredamenti Sormani si riserva il diritto di modificare la
                presente informativa in qualsiasi momento. Le modifiche
                saranno efficaci dalla data di pubblicazione su questa pagina.
                Si invita l'utente a consultare periodicamente questa sezione.
              </p>
            </section>

          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
