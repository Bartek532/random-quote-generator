import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span aria-label="loading..."></span>
      <div className={styles.loader}></div>
    </div>
  );
};
