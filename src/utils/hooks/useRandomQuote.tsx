import { useState, useEffect } from "react";
import axios from "axios";

export const useRandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("https://api.quotable.io/random");
        setQuote(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return { quote, loading };
};
