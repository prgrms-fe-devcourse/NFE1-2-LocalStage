import { useEffect, useState } from 'react';
import * as S from './styles';

export const LocalDateTime = () => {
  const [renderDateTime, setRenderDateTime] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    const dateTimeFormat = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(currentTime);

    setRenderDateTime(dateTimeFormat + ' 기준');
  }, []);

  return <S.LocalDateTime>{renderDateTime}</S.LocalDateTime>;
};
