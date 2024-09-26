import { useEffect, useState } from 'react';
import { xml2json } from 'xml-js';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const xmlText = await response.text();
        const jsonData = JSON.parse(xml2json(xmlText, { compact: true, spaces: 2 }));
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading };
}
