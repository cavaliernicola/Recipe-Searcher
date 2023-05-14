import axios from "axios";
import { useState, useEffect } from "react";

export default function useRecipeFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function downloadData() {
      setIsLoading(true);
      setIsError(false)

      try {
        const response = await axios.get(url)
        setData(response.data)
        setIsLoading(false)
      } catch {
        setIsLoading(false);
        setIsError(true)
      }
    }
    
    downloadData();
  }, [url]);

  return {data, isLoading, isError}
}