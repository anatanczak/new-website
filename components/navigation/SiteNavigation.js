'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import content from '../home/content.fr.json';
import styles from './navigation.module.scss';

function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a href="https://github.com/anatanczak" aria-label="GitHub">
        <img src="/icons/github_icon.svg" alt="" />
      </a>
      <a href="https://www.linkedin.com/in/anastasiatanczak/" aria-label="LinkedIn">
        <img src="/icons/linkedin_icon.svg" alt="" />
      </a>
    </div>
  );
}

export default function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event) {
      if (!navigation.current?.contains(event.target)) setOpen(false);
    }
    function onScroll() {
      if (window.scrollY > 10) setOpen(false);
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  if (pathname !== '/' && pathname !== '/biography') {
    return (
      <header>
        <nav>
          <Link href="/">Home</Link>{' '}
          <Link href="/biography">Biography</Link>{' '}
          <Link href="/apps">Apps</Link>{' '}
          <Link href="/portfolio">Portfolio</Link>
        </nav>
      </header>
    );
  }

  const items = [
    { label: content['navbar.aboutMe'], href: '/', current: pathname === '/' },
    { label: content['home.bio.title'], href: '/biography', current: pathname === '/biography' },
    { label: content['navbar.portfolio'], href: '/portfolio' },
    { label: content['navbar.contact'], href: '#contact' }
  ];

  return (
    <nav
      ref={navigation}
      className={`${styles.navigation} ${open ? styles.open : ''}`}
      aria-label="Navigation principale"
      lang="fr"
    >
      <div className={styles.rail}>
        <Link href="/" className={styles.logo} aria-label="Accueil">
          <img src="/icons/logo.svg" alt="" />
        </Link>
        <button
          ref={toggle}
          className={styles.toggle}
          type="button"
          onClick={() => setOpen(value => !value)}
          aria-expanded={open}
          aria-controls="home-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg height="50" width="50" viewBox="0 0 100 100" aria-hidden="true">
            <path className={styles.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className={styles.line2} d="M 20,50 H 80" />
            <path className={styles.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        <SocialLinks className={styles.social} />
      </div>
      <div id="home-menu" className={styles.menu} inert={!open}>
        <ul className={styles.items}>
          {items.map((item, index) => (
            <li key={item.href} style={{ '--item-index': index + 1 }}>
              <Link
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileSocialItem}>
            <SocialLinks className={styles.mobileSocial} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
