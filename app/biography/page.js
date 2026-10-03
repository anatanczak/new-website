import BiographySection from '../../components/biography/BiographySection';
import Footer from '../../components/footer/Footer';
import styles from './biography-page.module.scss';

export const metadata = {
  title: 'Mon parcours | Anastasia Tanczak',
  description: 'Le parcours d’Anastasia Tanczak, développeuse full-stack et iOS.'
};

export default function BiographyPage() {
  return (
    <div className={styles.page} data-biography-page lang="fr">
      <main className={styles.main}>
        <BiographySection heading="h1" />
      </main>
      <Footer />
    </div>
  );
}
