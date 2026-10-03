'use client';

import { useEffect, useRef } from 'react';
import styles from './reveal.module.scss';

export default function RevealGroup({ children, className }) {
  const container = useRef(null);

  useEffect(() => {
    const element = container.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || !('IntersectionObserver' in window)) return;

    let observer;
    function updateMotion() {
      observer?.disconnect();
      if (preference.matches) {
        element.removeAttribute('data-motion-ready');
        return;
      }

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.setAttribute('data-visible', String(entry.isIntersecting));
        });
      }, { threshold: 0.1 });

      element.querySelectorAll('[data-reveal]').forEach(target => {
        target.removeAttribute('data-visible');
        observer.observe(target);
      });
      element.setAttribute('data-motion-ready', 'true');
    }

    updateMotion();
    preference.addEventListener('change', updateMotion);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', updateMotion);
      element.removeAttribute('data-motion-ready');
    };
  }, []);

  return (
    <div ref={container} className={`${styles.group} ${className || ''}`}>
      {children}
    </div>
  );
}
