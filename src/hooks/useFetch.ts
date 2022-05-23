import { useState, useEffect } from "react";
interface Cita {
  quote_id: number;
  quote: string;
  author: string;
  series: string;
}

export interface FetchApi {
  loading: boolean;
  data?: Cita[] | null;
  error?: boolean;
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<FetchApi>({
    loading: true,
  });

  useEffect(() => {
    setState({
      loading: true,
    });
    try {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setState({
            loading: false,
            error: false,
            data,
          });
        });
    } catch (e) {
      console.log(e);
    }
  }, [url]);
  return state;
};
