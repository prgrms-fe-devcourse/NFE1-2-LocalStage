import { useEffect, useState } from 'react';
import { xml2json } from 'xml-js';

/**
 * 지정된 URL에서 XML 데이터를 가져와 JSON으로 변환하는 React 커스텀 훅입니다.
 *
 * @param {string} url - 데이터를 가져올 URL입니다.
 * @returns {{ data: T | undefined, isLoading: boolean }} - JSON 형식의 데이터와 로딩 상태를 포함하는 객체를 반환합니다.
 */
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
