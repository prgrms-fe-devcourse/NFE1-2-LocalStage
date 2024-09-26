import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';

export const StarIconContainer = () => {
  const [checkedStars, setCheckStars] = useState<number | null>(null);

  const onClick = (index: number) => {
    setCheckStars(index);
  };

  return (
    <S.StarIconContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          isChecked={checkedStars !== null && index <= checkedStars}
          onClick={() => onClick(index)}
        />
      ))}
    </S.StarIconContainer>
  );
};
