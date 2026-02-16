// src/app/privacy/page.js

import React from 'react';
import styles from './privacy.module.css';  // Importa il modulo CSS

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyContainer}>
      <h1>Privacy Policy</h1>
      <p>Ultimo aggiornamento: Aprile 2025</p>

      <p>
        Questa Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le informazioni
        personali quando visiti il nostro sito web e utilizzi i nostri servizi.
      </p>

      <h2>1. Chi siamo</h2>
      <p>
        Il sito Arredamenti Sormani è gestito da Arredamenti Sormani, una società che si occupa di
        arredamento per la casa e la cucina. La nostra sede si trova in Asso, Via Circonvallazione 14.
      </p>

      <h2>2. Tipo di dati che raccogliamo</h2>
      <p>
        Raccogliamo informazioni personali che ci fornisci direttamente quando interagisci con il nostro
        sito web, come il tuo nome, indirizzo email, numero di telefono e qualsiasi altro dato che inserisci
        nei moduli di contatto o durante la registrazione a newsletter.
      </p>
      <p>
        Inoltre, raccogliamo automaticamente alcune informazioni tramite cookie, come lindirizzo IP,
        il tipo di dispositivo, la posizione geografica e altre informazioni relative alla tua navigazione
        sul nostro sito.
      </p>

      <h2>3. Come utilizziamo i tuoi dati</h2>
      <p>
        Utilizziamo i tuoi dati personali per:
        <ul>
          <li>Fornire i nostri servizi di arredamento e rispondere alle tue richieste.</li>
          <li>Inviare newsletter, promozioni e aggiornamenti sui nostri prodotti e servizi.</li>
          <li>Analizzare luso del sito per migliorare lesperienza dellutente e ottimizzare il nostro sito web.</li>
          <li>Assicurare la sicurezza del nostro sito e dei tuoi dati.</li>
        </ul>
      </p>

      <h2>4. Condivisione dei dati</h2>
      <p>
        Non venderemo mai i tuoi dati a terzi. Tuttavia, possiamo condividere i tuoi dati con terzi solo nei seguenti casi:
        <ul>
          <li>Con fornitori di servizi che ci aiutano a gestire il sito web e i servizi correlati (es. hosting, email marketing, analisi dei dati).</li>
          <li>Se richiesto dalla legge, per rispettare un obbligo legale o rispondere a procedimenti legali.</li>
        </ul>
      </p>

      <h2>5. Come proteggiamo i tuoi dati</h2>
      <p>
        Prendiamo misure di sicurezza adeguate per proteggere i tuoi dati personali, inclusi sistemi di
        crittografia e altre pratiche di sicurezza per prevenire accessi non autorizzati.
      </p>

      <h2>6. I tuoi diritti</h2>
      <p>
        Hai il diritto di accedere, correggere o cancellare i tuoi dati personali in qualsiasi momento. Puoi anche
        esercitare il diritto di limitare o opporsi al trattamento dei tuoi dati.
      </p>
      <p>
        Se desideri esercitare uno di questi diritti o se hai domande riguardo alla gestione dei tuoi dati personali,
        puoi contattarci allindirizzo email: <strong>info@arredamentisormani.it</strong>.
      </p>

      <h2>7. Uso dei cookie</h2>
      <p>
        Il nostro sito utilizza i cookie per migliorare lesperienza dellutente. I cookie sono piccoli file di testo
        che vengono memorizzati sul tuo dispositivo per raccogliere informazioni su come utilizzi il nostro sito.
        Puoi disabilitare i cookie nelle impostazioni del tuo browser, ma ciò potrebbe influire sulla funzionalità del sito.
      </p>

      <h2>8. Modifiche a questa Privacy Policy</h2>
      <p>
        Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Ogni modifica sarà pubblicata
        su questa pagina con la data di aggiornamento. Ti consigliamo di consultare regolarmente questa pagina per rimanere
        informato sulle nostre pratiche di protezione dei dati.
      </p>

      <h2>9. Contattaci</h2>
      <p>
        Se hai domande o preoccupazioni riguardo alla nostra Privacy Policy, puoi contattarci allindirizzo email:
        <strong>info@arredamentisormani.it</strong>.
      </p>
    </div>
  );
}
