'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './contatti.module.css';

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const [inviato, setInviato] = useState(false);
  const [errore, setErrore] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrore(false);
    try {
      const response = await fetch('https://formspree.io/f/xjkwvyrq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setInviato(true);
        setFormData({ nome: '', email: '', messaggio: '' });
      } else {
        setErrore(true);
      }
    } catch (error) {
      setErrore(true);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.container}>
        <h1 className={styles.title}>Contattaci</h1>
        <p className={styles.subtitle}>Hai domande? Scrivici o vieni a trovarci in showroom!</p>

        <div className={styles.content}>
          <div className={styles.formSection}>
            {inviato ? (
              <p className={styles.successMessage}>✅ Messaggio inviato con successo!</p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Nome
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Messaggio
                  <textarea
                    name="messaggio"
                    rows="5"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit">Invia Messaggio</button>
                {errore && <p className={styles.error}>❌ Si è verificato un errore, riprova.</p>}
              </form>
            )}
          </div>

          <div className={styles.infoSection}>
            <h2>Showroom</h2>
            <p>Arredamenti Sormani</p>
            <p>Via Circonvallazione 14, Asso (CO)</p>
            <p>Email: <a href="mailto:arredamentisormani@virgilio.it">arredamentisormani@virgilio.it</a></p>
            <p>Tel: <a href="tel:+393358310617">+39 335 8310617</a></p>
            <a
              href="https://www.google.com/maps/place/Via+Circonvallazione+14,+Asso"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              📍 Visualizza su Google Maps
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
