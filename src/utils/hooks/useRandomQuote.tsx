import { useState, useEffect } from "react";
import axios from "axios";

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
      const { data }: { data: Quote } = await axios.get(
        "https://api.quotable.io/random"
      );
      setQuote(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNextQuote();
  }, []);

  return { quote, loading, fetchNextQuote };
};
