'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Arredamenti Sormani</Link>
      </div>

      <nav className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
        <Link href="/" className={styles.navlink}>Home</Link>
        <Link href="/lavori" className={styles.navlink}>Lavori</Link>
        <Link href="/contatti" className={styles.navlink}>Contatti</Link>
      </nav>

      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
}
