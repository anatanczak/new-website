'use client';

import { useRef, useState } from 'react';
import styles from './carousel.module.scss';

export default function ProjectCarousel({ images, title }) {
  const [active, setActive] = useState(0);
  const gesture = useRef(null);

  function move(delta) {
    setActive(index => Math.max(0, Math.min(images.length - 1, index + delta)));
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  function onPointerDown(event) {
    if (event.pointerType === 'mouse') return;
    gesture.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event) {
    const start = gesture.current;
    gesture.current = null;
    if (!start) return;
    const distance = event.clientX - start.x;
    if (Math.abs(distance) >= 50 && Math.abs(distance) > Math.abs(event.clientY - start.y)) {
      move(distance < 0 ? 1 : -1);
    }
  }

  return (
    <div className={styles.carousel} role="region" aria-roledescription="carrousel" aria-label={`Images — ${title}`}>
      <button
        className={`${styles.arrow} ${styles.previous}`}
        type="button"
        onClick={() => move(-1)}
        disabled={active === 0}
        aria-label="Image précédente"
      >
        <img src="/icons/left_arrow_carousel_icon.svg" alt="" />
      </button>
      <div
        className={styles.viewport}
        tabIndex={images.length > 1 ? 0 : undefined}
        role="group"
        aria-label="Images du projet, utilisez les flèches du clavier pour naviguer"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { gesture.current = null; }}
      >
        <div className={styles.track} style={{ '--slide-index': active }}>
          {images.map((image, index) => (
            <div className={styles.slide} key={image.src} aria-hidden={index !== active}>
              <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.arrow} ${styles.next}`}
        type="button"
        onClick={() => move(1)}
        disabled={active === images.length - 1}
        aria-label="Image suivante"
      >
        <img src="/icons/right_arrow_carousel_icon.svg" alt="" />
      </button>
      <div className={styles.indicators} role="group" aria-label="Choisir une image">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.indicator}
            onClick={() => setActive(index)}
            aria-label={`Afficher l’image ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
          />
        ))}
      </div>
      <p className={styles.status} aria-live="polite" aria-atomic="true">Image {active + 1} sur {images.length}</p>
    </div>
  );
}
