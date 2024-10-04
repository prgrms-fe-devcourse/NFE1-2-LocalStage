import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';
interface StarIconContainerProps {
  updateStarRating?: (count: number) => void;
  initialRate?: number;
}

const starsArray = Array.from({ length: 5 });

export const StarIconContainer = ({ updateStarRating, initialRate = 0 }: StarIconContainerProps) => {
  const rate = Math.min(5, Math.max(1, initialRate));
  const [checkedStars, setCheckedStars] = useState(rate - 1);

  const onClick = (index: number) => () => {
    setCheckedStars(index);
    updateStarRating?.(index + 1);
  };

  return (
    <S.StarIconContainer>
      {starsArray.map((_, index) => (
        <StarIcon key={index} isChecked={index <= checkedStars} onClick={onClick(index)} />
      ))}
    </S.StarIconContainer>
  );
};
