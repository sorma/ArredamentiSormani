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
              I presenti Termini e Condizioni disciplinano l'accesso e
              l'utilizzo del sito web di Arredamenti Sormani. La navigazione
              del sito implica l'accettazione integrale delle presenti condizioni.
            </p>
          </section>

          <section className={styles.content}>

            {/* ARTICOLO 1 */}
            <section className={styles.card}>
              <h2>1. Oggetto e finalità del sito</h2>
              <p>
                Il presente sito web ha finalità esclusivamente informative e
                di presentazione dei servizi, dei prodotti trattati e delle
                realizzazioni di Arredamenti Sormani, con sede in Via
                Circonvallazione 14, Asso (CO).
              </p>
              <p>
                Il sito non consente acquisti online, non raccoglie dati
                personali tramite moduli di contatto e non effettua alcuna
                attività di commercio elettronico.
              </p>
            </section>

            {/* ARTICOLO 2 */}
            <section className={styles.card}>
              <h2>2. Utilizzo del sito</h2>
              <p>
                L'utente si impegna a utilizzare il sito in modo lecito,
                corretto e conforme alla normativa vigente.
              </p>
              <p>
                Non è consentito utilizzare il sito per attività che possano
                comprometterne il funzionamento, la sicurezza o l'integrità
                dei contenuti, né tentare di accedere in modo non autorizzato
                a sezioni riservate o ai sistemi informatici correlati.
              </p>
            </section>

            {/* ARTICOLO 3 — RISCRITTO */}
            <section className={styles.card}>
              <h2>3. Proprietà intellettuale e contenuti del sito</h2>
              <p>
                Testi, fotografie, elementi grafici, icone e contenuti
                editoriali presenti sul sito sono di proprietà di Arredamenti
                Sormani, salvo diversa indicazione. È vietata la copia,
                riproduzione, distribuzione o riutilizzo dei contenuti senza
                preventiva autorizzazione scritta da parte di Arredamenti Sormani.
              </p>
              <p>
                Le fotografie delle realizzazioni presenti nella sezione
                "Lavori" ritraggono progetti eseguiti da Arredamenti Sormani e
                sono pubblicate con il consenso dei clienti. Tali immagini non
                possono essere utilizzate, riprodotte o diffuse senza
                autorizzazione scritta.
              </p>
            </section>

            {/* ARTICOLO 4 — NUOVO */}
            <section className={styles.card}>
              <h2>4. Marchi di terzi</h2>
              <p>
                Il sito cita e visualizza marchi, denominazioni e loghi di
                aziende terze — tra cui Arredo3, Fratelli Elli, Battistella,
                Solid Top e Vallmar — a scopo puramente descrittivo e
                informativo, nell'ambito delle collaborazioni commerciali
                intrattenute da Arredamenti Sormani.
              </p>
              <p>
                Tali marchi sono di esclusiva proprietà dei rispettivi
                titolari. Arredamenti Sormani è un'azienda indipendente e
                non è store ufficiale, rivenditore autorizzato certificato né
                affiliata commerciale di alcuno dei brand citati. Il
                riferimento ai marchi non implica alcuna sponsorizzazione,
                approvazione o partnership ufficiale da parte dei produttori.
              </p>
            </section>

            {/* ARTICOLO 5 — ex 4 */}
            <section className={styles.card}>
              <h2>5. Cookie e dati tecnici di navigazione</h2>
              <p>
                Il sito utilizza esclusivamente cookie tecnici necessari al
                corretto funzionamento delle pagine. Non vengono utilizzati
                cookie di profilazione, tracciamento o marketing.
              </p>
              <p>
                Non vengono raccolti, trattati o conservati dati personali
                degli utenti tramite il sito. I recapiti pubblicati nella
                pagina Contatti (telefono ed email) sono forniti per
                comunicazioni dirette e volontarie da parte dell'utente, e
                non vengono utilizzati per iniziative di marketing.
              </p>
            </section>

            {/* ARTICOLO 6 — ex 4 */}
            <section className={styles.card}>
              <h2>6. Accuratezza delle informazioni</h2>
              <p>
                Arredamenti Sormani si impegna a mantenere aggiornate e
                corrette le informazioni pubblicate sul sito.
              </p>
              <p>
                I contenuti hanno finalità informativa e possono essere
                modificati, aggiornati o rimossi in qualsiasi momento senza
                preavviso. Le informazioni sui prodotti e sui brand trattati
                sono soggette a variazioni da parte dei produttori; per
                dettagli aggiornati è consigliabile contattare direttamente
                lo showroom.
              </p>
            </section>

            {/* ARTICOLO 7 — ex 5 */}
            <section className={styles.card}>
              <h2>7. Link esterni</h2>
              <p>
                Il sito contiene collegamenti a siti web di terzi, tra cui i
                siti ufficiali dei brand trattati, servizi di mappe e altri
                contenuti esterni.
              </p>
              <p>
                Arredamenti Sormani non è responsabile dei contenuti, della
                disponibilità, dell'accuratezza o delle politiche sulla
                privacy adottate da tali siti esterni. L'accesso a siti terzi
                avviene sotto la piena responsabilità dell'utente.
              </p>
            </section>

            {/* ARTICOLO 8 — ex 6 */}
            <section className={styles.card}>
              <h2>8. Limitazione di responsabilità</h2>
              <p>
                Nei limiti consentiti dalla legge, Arredamenti Sormani non
                potrà essere ritenuta responsabile per danni diretti o
                indiretti derivanti dall'uso del sito, da eventuali
                interruzioni del servizio, da errori presenti nei contenuti o
                dall'utilizzo di informazioni ivi pubblicate.
              </p>
            </section>

            {/* ARTICOLO 9 — ex 7 */}
            <section className={styles.card}>
              <h2>9. Modifiche ai termini</h2>
              <p>
                Arredamenti Sormani si riserva il diritto di modificare in
                qualsiasi momento i presenti Termini e Condizioni. Le
                eventuali modifiche saranno efficaci dalla data di
                pubblicazione su questa pagina. Si invita l'utente a
                consultare periodicamente questa sezione.
              </p>
            </section>

            {/* ARTICOLO 10 — ex 8 POTENZIATO */}
            <section className={styles.card}>
              <h2>10. Legge applicabile e foro competente</h2>
              <p>
                I presenti Termini e Condizioni sono regolati dalla legge
                italiana. Per qualsiasi controversia derivante dall'utilizzo
                del sito o dall'interpretazione dei presenti termini, sarà
                competente in via esclusiva il Tribunale di Como, salvo
                diversa disposizione inderogabile di legge a tutela del
                consumatore.
              </p>
            </section>

            {/* ARTICOLO 11 — ex 9 */}
            <section className={styles.card}>
              <h2>11. Contatti</h2>
              <p>
                Per informazioni relative ai presenti Termini e Condizioni è
                possibile contattare Arredamenti Sormani tramite i recapiti
                indicati nella pagina Contatti del sito.
              </p>
            </section>

          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
