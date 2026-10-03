import Footer from '../footer/Footer';
import MailShortcut from '../contact/MailShortcut';
import styles from './portfolio.module.scss';

export default function PortfolioLayout({ children }) {
  return (
    <div className={styles.page} data-portfolio-page lang="fr">
      <main className={styles.main}>{children}</main>
      <MailShortcut />
      <Footer />
    </div>
  );
}
