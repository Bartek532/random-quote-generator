import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <span className="sr-only">loading...</span>
      <div className={styles.loader}></div>
    </div>
  );
};
