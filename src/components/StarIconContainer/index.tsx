import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';
interface StarIconContainerProps {
  onChange: (count: number) => void;
}

export const StarIconContainer = ({ onChange }: StarIconContainerProps) => {
  const [checkedStars, setCheckStars] = useState<number | null>(null);

  const onClick = (index: number) => {
    setCheckStars(index);
    if (index !== null) {
      onChange(index + 1);
    }
  };

  return (
    <S.StarIconContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={`star-${index}`}
          isChecked={checkedStars !== null && index <= checkedStars}
          onClick={() => onClick(index)}
        />
      ))}
    </S.StarIconContainer>
  );
};
