import styles from './mail-shortcut.module.scss';

export default function MailShortcut() {
  return (
    <a className={styles.shortcut} href="mailto:anatkachen@gmail.com" aria-label="Envoyer un e-mail à Anastasia">
      <img src="/icons/mail_icon.svg" alt="" />
    </a>
  );
}
