import { useState } from 'react';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

interface HeartButtonProps {
  initialFilled?: boolean;
  onClick?: (isFilled: boolean) => void;
}

export const HeartButton = ({ initialFilled = false, onClick }: HeartButtonProps) => {
  const [isFilled, setIsFilled] = useState(initialFilled);

  const handleClick = () => {
    const newFilledState = !isFilled;
    setIsFilled(prev => !prev);
    if (onClick) {
      onClick(newFilledState);
    }
  };

  return <S.HeartButton icon={isFilled ? fasHeart : farHeart} $isFilled={isFilled} onClick={handleClick} />;
};
