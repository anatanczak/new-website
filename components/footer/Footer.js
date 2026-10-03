import content from '../home/content.fr.json';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer} lang="fr">
      <div className={styles.policy}>
        <p>© Anastasia Tanczak</p>
        <span>{content['footer.privacyPolicy']}</span>
      </div>
      <div className={styles.contact}>
        <h2>{content['footer.contact']}</h2>
        <div className={styles.contactItem}>
          <img src="/icons/phone_icon_white.svg" alt="" />
          <a href="tel:+33695564993">+33(0)6 95 56 49 93</a>
        </div>
        <div className={styles.contactItem}>
          <img src="/icons/email_icon_white.svg" alt="" />
          <a href="mailto:anatkachen@gmail.com">anatkachen@gmail.com</a>
        </div>
      </div>
      <div className={styles.social}>
        <h2>{content['footer.followMe']}</h2>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/anastasiatanczak/" aria-label="LinkedIn">
            <img src="/icons/linkedin_icon_white.svg" alt="" />
          </a>
          <a href="https://github.com/anatanczak" aria-label="GitHub">
            <img src="/icons/github_icon_white.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
