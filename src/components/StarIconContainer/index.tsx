import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';
interface StarIconContainerProps {
  onChange: (count: number) => void;
}

export const StarIconContainer = ({ onChange }: StarIconContainerProps) => {
  const [checkedStars, setCheckStars] = useState(-1);

  const onClick = (index: number) => () => {
    setCheckStars(index);
    onChange(index + 1);
  };

  return (
    <S.StarIconContainer>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} isChecked={index <= checkedStars} onClick={onClick(index)} />
      ))}
    </S.StarIconContainer>
  );
};
