import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';
interface StarIconContainerProps {
  updateStarRating?: (count: number) => void;
  rate?: number;
}

const starsArray = Array.from({ length: 5 });

export const StarIconContainer = ({ updateStarRating, rate = 0 }: StarIconContainerProps) => {
  const initialRate = Math.max(1, rate);
  const [checkedStars, setCheckedStars] = useState(initialRate - 1);

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
