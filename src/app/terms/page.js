// src/app/terms/page.js

import React from 'react';
import styles from './terms.module.css';  // Importa il modulo CSS specifico per i Termini

export default function TermsAndConditions() {
  return (
    <div className={styles.termsContainer}>
      <h1>Termini e Condizioni</h1>
      <p>Ultimo aggiornamento: Aprile 2025</p>

      <p>
        Benvenuto nel sito web Arredamenti Sormani. Laccesso e lutilizzo di questo sito sono
        soggetti ai seguenti Termini e Condizioni. Ti invitiamo a leggere attentamente queste
        condizioni prima di utilizzare il sito.
      </p>

      <h2>1. Accettazione dei Termini</h2>
      <p>
        Utilizzando il nostro sito web, accetti i presenti Termini e Condizioni. Se non accetti questi
        Termini, ti preghiamo di non utilizzare il nostro sito.
      </p>

      <h2>2. Modifiche ai Termini</h2>
      <p>
        Ci riserviamo il diritto di modificare, aggiornare o cambiare questi Termini e Condizioni in qualsiasi momento.
        Le modifiche verranno pubblicate su questa pagina con la data di aggiornamento. Ti invitiamo a
        controllare regolarmente questa pagina per verificare eventuali modifiche.
      </p>

      <h2>3. Proprietà Intellettuale</h2>
      <p>
        Tutti i contenuti, compresi testi, immagini, grafica, loghi, video e software, sono di proprietà di
        Arredamenti Sormani o dei rispettivi proprietari dei diritti dautore. Non è consentito copiare, riprodurre,
        distribuire o pubblicare i contenuti senza il nostro esplicito consenso.
      </p>

      <h2>4. Uso del Sito</h2>
      <p>
        Accetti di utilizzare il nostro sito solo per scopi leciti e in modo da non violare i diritti di altri utenti.
        Non è consentito caricare contenuti dannosi, offensivi o illegali.
      </p>

      <h2>5. Limitazione di Responsabilità</h2>
      <p>
        Arredamenti Sormani non si assume alcuna responsabilità per danni diretti o indiretti derivanti
        dalluso del nostro sito web, inclusi errori, interruzioni o virus informatici. Utilizzi il nostro sito
        a tuo rischio.
      </p>

      <h2>6. Link a Siti di Terzi</h2>
      <p>
        Il nostro sito può contenere link a siti web di terzi. Non siamo responsabili per i contenuti o le
        pratiche di privacy di questi siti esterni.
      </p>

      <h2>7. Legge Applicabile</h2>
      <p>
        I presenti Termini e Condizioni sono regolati dalla legge italiana. In caso di controversie, sarà competente
        il foro di Milano, Italia.
      </p>

      <h2>8. Contatti</h2>
      <p>
        Per domande o chiarimenti sui Termini e Condizioni, puoi contattarci allindirizzo email: <strong>info@arredamentisormani.it</strong>
      </p>
    </div>
  );
}
