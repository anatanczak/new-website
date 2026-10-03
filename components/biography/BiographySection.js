import content from '../home/content.fr.json';
import styles from './biography.module.scss';

export default function BiographySection({ heading = 'h2' }) {
  const Heading = heading;

  return (
    <section className={styles.biography} aria-labelledby="biography-title">
      <Heading id="biography-title" className={styles.title}>{content['home.bio.title']}</Heading>
      <div className={styles.content}>
        <picture className={styles.portrait}>
          <source
            media={`(min-width: ${styles.desktopBreakpoint})`}
            srcSet="/images/home/portrait_bio_desktop.webp"
          />
          <img
            src="/images/home/portrait_bio_mobile.webp"
            alt="Portrait d’Anastasia Tanczak"
            loading={heading === 'h1' ? 'eager' : 'lazy'}
          />
        </picture>
        <div className={styles.text}>
          {content['home.bio.text'].split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
