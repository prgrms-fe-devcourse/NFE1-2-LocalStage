import { useEffect, useState } from 'react';
import * as S from './styles';

export const LocalDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);

      setCurrentDateTime(formattedDate.replace(/\./g, '') + ' 기준');
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 60000); // 1분마다 업데이트

    return () => clearInterval(timer);
  }, []);

  return <S.LocalDateTime>{currentDateTime}</S.LocalDateTime>;
};
