import { useRandomQuote } from "utils/hooks/useRandomQuote";
import styles from "./Quote.module.scss";
import { Loader } from "components/Loader/Loader";

const colorPalette = [
  "ffb703",
  "fb8500",
  "f72585",
  "52b69a",
  "00b4d8",
  "7209b7",
  "9381ff",
];

export const Quote = () => {
  const { quote, loading, fetchNextQuote } = useRandomQuote();
  const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.quote} style={{ backgroundColor: "#" + color }}>
        <p className={styles.text}>{quote.content}</p>
        <div className={styles.footer}>{quote.author}</div>
      </div>
      <button className={styles.btn} onClick={fetchNextQuote}>
        next quote
      </button>
    </div>
  );
};
