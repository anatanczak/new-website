import Footer from '../../components/footer/Footer';
import content from '../../components/contact/content.fr.json';
import styles from './contact.module.scss';

export const metadata = {
  title: 'Contact | Anastasia Tanczak',
  description: 'Contactez Anastasia Tanczak, développeuse full-stack et iOS.'
};

export default function ContactPage() {
  return (
    <div data-contact-page lang="fr">
      <main className={styles.main}>
        <div className={styles.information}>
          <h1>{content['contact.hireMe']}</h1>
          <p>
            {content['contact.callMe']}
            <a href="tel:+33695564993" className={styles.contactValue}>+33(0)6 95 56 49 93</a>
          </p>
          <p>{content['contact.or']}</p>
          <p>
            {content['contact.writeEmail']}
            <a href="mailto:anatkachen@gmail.com" className={styles.contactValue}>anatkachen@gmail.com</a>
          </p>
          <h2>{content['contact.knowMore']}</h2>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/anastasiatanczak/" aria-label="LinkedIn">
              <img src="/icons/linkedin_icon_palegreen.svg" alt="" />
            </a>
            <a href="https://github.com/anatanczak" aria-label="GitHub">
              <img src="/icons/github_icon_palegreen.svg" alt="" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
