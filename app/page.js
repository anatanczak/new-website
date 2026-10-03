import Link from 'next/link';
import SkillsSection from '../components/home/SkillsSection';
import LanguagesSection from '../components/home/LanguagesSection';
import BiographySection from '../components/biography/BiographySection';
import Footer from '../components/footer/Footer';
import content from '../components/home/content.fr.json';
import styles from './home.module.scss';

export const metadata = {
  title: 'Anastasia Tanczak',
  description: content['home.pitch']
};

const services = [
  { key: 'webDevelopment', icon: 'web_dev_icon.svg' },
  { key: 'iosDevelopment', icon: 'ios_dev_icon.svg' },
  { key: 'uiDesign', icon: 'ui_design_icon.svg' }
];

const hobbies = [
  { key: 'drawing', icon: 'drawing_icon.svg' },
  { key: 'yoga', icon: 'yoga_icon.svg' },
  { key: 'salsa', icon: 'salsa_icon.svg' },
  { key: 'travel', icon: 'travel_icon.svg' }
];

export default function Page() {
  return (
    <>
      <main className={styles.home} data-home-page lang="fr">
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={styles.introduction}>
            <h1 id="home-title">{content['home.mainTitle']}</h1>
            <p className={styles.pitch}>{content['home.pitch']}</p>
            <div className={styles.actions}>
              <a className={styles.button} href="/files/cv_tanczak_fullstack.pdf" download>
                {content['home.button.downloadResume']}
              </a>
              <Link className={styles.button} href="/portfolio">
                {content['home.button.viewPortfolio']}
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.services} aria-labelledby="services-title">
          <h2 id="services-title" className={styles.sectionTitle}>{content['home.services.title']}</h2>
          <div className={styles.serviceList}>
            {services.map(service => (
              <article className={styles.service} key={service.key}>
                <img
                  className={styles.serviceIcon}
                  src={`/icons/${service.icon}`}
                  alt={content[`home.services.${service.key}.altText`]}
                />
                <h3>{content[`home.services.${service.key}.title`]}</h3>
                <p>{content[`home.services.${service.key}.text`]}</p>
                <Link
                  className={styles.projectLink}
                  href="/portfolio"
                  aria-label={`${content['home.services.link']} — ${content[`home.services.${service.key}.title`]}`}
                >
                  <span className={styles.linkHighlight}>
                    <span>{content['home.services.link']}</span>
                  </span>
                  <span className={styles.arrowCircle}>
                    <img src="/icons/darkblue_arrow.svg" alt="" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <SkillsSection title={content['home.skills.title']} />
        <LanguagesSection />

        <BiographySection />

        <section className={styles.hobbies} aria-labelledby="hobbies-title">
          <h2 id="hobbies-title" className={styles.sectionTitle}>{content['home.hobbies.title']}</h2>
          <div className={styles.hobbyList}>
            {hobbies.map(hobby => (
              <div className={styles.hobby} key={hobby.key}>
                <img src={`/icons/${hobby.icon}`} alt="" loading="lazy" />
                <h3>{content[`home.hobbies.${hobby.key}`]}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <a className={styles.mailShortcut} href="mailto:anatkachen@gmail.com" aria-label="Envoyer un e-mail à Anastasia">
        <img src="/icons/mail_icon.svg" alt="" />
      </a>
      <Footer />
    </>
  );
}
