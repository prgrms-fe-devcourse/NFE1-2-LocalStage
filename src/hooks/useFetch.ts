import { useEffect, useState } from 'react';
import { xml2json } from 'xml-js';

export default function useFetch(url: string) {
  const [data, setData] = useState('');
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
