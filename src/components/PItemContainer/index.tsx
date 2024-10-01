import { PItem } from '@/components/PItem';
import usePList from '@/hooks/usePList';
import { useEffect, useState } from 'react';

interface PListParams {
  stdate: string;
  eddate: string;
  cpage: number;
  rows: number;
  prfstate: string;
  signgucode: string;
  sortStdr: string;
}

export const PItemContainer = () => {
  const [params, setParams] = useState<PListParams>({
    stdate: '', // 시작일
    eddate: '', // 종료일
    cpage: 1, // 현재 페이지
    rows: 50, // 불러올 목록
    prfstate: '02', // 공연중
    signgucode: '11', // 전국
    sortStdr: '3', // 관람객 수 기준 내림차순
  });

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDate(today);
    setParams(prev => ({
      ...prev,
      stdate: formattedDate,
      eddate: formattedDate,
    }));
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  };

  const { data, isLoading } = usePList(params);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!data || !data.dbs || !data.dbs.db) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <>
      {data.dbs.db.map((item, index) => (
        <PItem
          key={item.mt20id}
          rank={index + 1}
          id={item.mt20id}
          title={`${item.prfnm}`}
          venue={item.fcltynm}
          period={`${item.prfpdfrom} ~ ${item.prfpdto}`}
          posterUrl={item.poster}
          area={item.area}
        />
      ))}
    </>
  );
};
