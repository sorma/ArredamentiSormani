'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.leftArea}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <Image
                src="/images/logo.png"
                alt="Logo Arredamenti Sormani"
                width={260}
                height={78}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>

          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navlink}>Home</Link>
            <Link href="/armadi" className={styles.navlink}>Armadi</Link>
            <Link href="/cucine" className={styles.navlink}>Cucine</Link>
            <Link href="/prodotti" className={styles.navlink}>Prodotti</Link>
            <Link href="/lavori" className={styles.navlink}>Lavori</Link>
            <Link href="/contatti" className={styles.navlink}>Contatti</Link>
          </nav>

          <div className={styles.rightArea}>
            <button
              type="button"
              className={styles.callButton}
              onClick={() => setShowPhone((prev) => !prev)}
              aria-label={showPhone ? 'Nascondi numero' : 'Mostra numero'}
            >
              <Phone size={18} />
              <span>{showPhone ? '3358310617' : 'Chiama ora'}</span>
            </button>

            <button
              className={styles.toggle}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ''}`}>
        <button
          type="button"
          className={styles.mobileCallButton}
          onClick={() => setShowPhone((prev) => !prev)}
        >
          <Phone size={18} />
          <span>{showPhone ? '3358310617' : 'Chiama ora'}</span>
        </button>

        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
          Home
        </Link>
        <Link href="/prodotti" className={styles.mobileLink} onClick={closeMenu}>
          Prodotti
        </Link>
        <Link href="/armadi" className={styles.mobileLink} onClick={closeMenu}>
          Armadi
        </Link>
        <Link href="/cucine" className={styles.mobileLink} onClick={closeMenu}>
          Cucine
        </Link>
        <Link href="/lavori" className={styles.mobileLink} onClick={closeMenu}>
          Lavori
        </Link>
        <Link href="/contatti" className={styles.mobileLink} onClick={closeMenu}>
          Contatti
        </Link>
      </div>

      {isOpen && (
        <button
          className={styles.backdrop}
          onClick={closeMenu}
          aria-label="Chiudi menu"
        />
      )}
    </>
  );
}
