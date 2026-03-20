'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './contatti.module.css';

export default function ContattiPage() {
  const [showPage, setShowPage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: '',
  });

  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [inviato, setInviato] = useState(false);
  const [errore, setErrore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setAcceptPolicy(checked);
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptPolicy) {
      setErrore(true);
      return;
    }

    setErrore(false);
    setInviato(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjkwvyrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          accettazione_privacy: acceptPolicy,
        }),
      });

      if (response.ok) {
        setInviato(true);
        setFormData({ nome: '', email: '', messaggio: '' });
        setAcceptPolicy(false);
      } else {
        setErrore(true);
      }
    } catch (error) {
      setErrore(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main
        className={`${styles.container} ${
          showPage ? styles.pageVisible : styles.pageHidden
        }`}
      >
        <section className={styles.hero}>
          <h1 className={styles.title}>Parliamo del tuo progetto</h1>
          <p className={styles.subtitle}>
            Hai un’idea, una richiesta o vuoi fissare un appuntamento in showroom?
            Scrivici e ti risponderemo il prima possibile.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.formSection}>
            <div className={styles.sectionHeader}>
              <h2>Invia un messaggio</h2>
              <p>Compila il modulo e verrai ricontattato.</p>
            </div>

            {inviato ? (
              <div className={styles.successBox}>
                <h3>Messaggio inviato</h3>
                <p>Grazie per averci contattato. Ti risponderemo al più presto.</p>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => setInviato(false)}
                >
                  Invia un nuovo messaggio
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@email.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="messaggio">Messaggio</label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows="6"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivici la tua richiesta..."
                    required
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel} htmlFor="acceptPolicy">
                    <input
                      id="acceptPolicy"
                      type="checkbox"
                      name="acceptPolicy"
                      checked={acceptPolicy}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      Dichiaro di aver letto e accettato i{' '}
                      <a href="/terms" target="_blank" rel="noopener noreferrer">
                        Termini e Servizi
                      </a>{' '}
                      e l’
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">
                        Informativa Privacy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <div className={styles.actions}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting || !acceptPolicy}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                  </button>
                </div>

                {errore && (
                  <div className={styles.errorBox}>
                    {!acceptPolicy
                      ? 'Per continuare devi accettare Termini e Servizi e Informativa Privacy.'
                      : 'Si è verificato un errore. Riprova tra qualche istante.'}
                  </div>
                )}
              </form>
            )}
          </div>

          <aside className={styles.infoSection}>
            <div className={styles.infoCard}>
              <span className={styles.infoEyebrow}>Showroom</span>
              <h2>Arredamenti Sormani</h2>
              <p>
                Soluzioni d’arredo su misura, attenzione ai dettagli e contatto
                diretto con il cliente.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <strong>Indirizzo</strong>
                    <p>Via Circonvallazione 14, Asso (CO)</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href="mailto:arredamentisormani@virgilio.it">
                        arredamentisormani@virgilio.it
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>Telefono</strong>
                    <p>
                      <a href="tel:+393358310617">+39 335 8310617</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.infoActions}>
                <a
                  href="https://www.google.com/maps/place/Via+Circonvallazione+14,+Asso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                >
                  Visualizza su Google Maps
                </a>

                <a
                  href="tel:+393358310617"
                  className={styles.secondaryLink}
                >
                  Chiama ora
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
