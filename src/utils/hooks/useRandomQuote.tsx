import { useState, useEffect } from "react";

type Quote = {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
};

export const useRandomQuote = () => {
  const [quote, setQuote] = useState({} as Quote);
  const [loading, setLoading] = useState(false);

  const fetchNextQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.quotable.io/random");
      const quote: Quote = await response.json();
      setQuote(quote);
    } catch (e) {
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNextQuote();
  }, []);

  return { quote, loading, fetchNextQuote };
};
