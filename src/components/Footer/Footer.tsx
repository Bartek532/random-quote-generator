import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with &#128155; by{" "}
      <a href="https://github.com/Bartek532" className={styles.link}>
        Bartosz Zagrodzki
      </a>
    </footer>
  );
};
