import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>My Notes App Inc. {currentYear}</p>
    </footer>
  );
}
