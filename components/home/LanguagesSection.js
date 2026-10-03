import RevealGroup from './RevealGroup';
import content from './content.fr.json';
import styles from './languages.module.scss';

const languages = [
  { key: 'en', level: 90 },
  { key: 'fr', level: 93 },
  { key: 'de', level: 85 },
  { key: 'ua', level: 100 },
  { key: 'ru', level: 95 },
  { key: 'es', level: 10 }
];

export default function LanguagesSection() {
  return (
    <section className={styles.languages} aria-labelledby="languages-title">
      <h2 id="languages-title">{content['home.laguages.title']}</h2>
      <RevealGroup className={styles.list}>
        {languages.map(language => (
          <div className={styles.language} key={language.key}>
            <p id={`language-${language.key}`}>{content[`home.laguages.${language.key}`]}</p>
            <div
              className={styles.track}
              role="meter"
              aria-labelledby={`language-${language.key}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={language.level}
            >
              <div className={styles.level} style={{ '--level': `${language.level}%` }} data-reveal />
            </div>
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}
