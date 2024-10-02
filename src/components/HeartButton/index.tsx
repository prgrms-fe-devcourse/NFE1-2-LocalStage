import { useState } from 'react';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

interface HeartButtonProps {
  initialFilled?: boolean;
  onClickHeartButton?: (isFilled: boolean) => void;
}

export const HeartButton = ({ initialFilled = false, onClickHeartButton }: HeartButtonProps) => {
  const [isFilled, setIsFilled] = useState(initialFilled);

  const onClick = () => {
    const newFilledState = !isFilled;
    setIsFilled(prev => !prev);
    if (onClickHeartButton) {
      onClickHeartButton(newFilledState);
    }
  };

  return <S.HeartButton icon={isFilled ? fasHeart : farHeart} $isFilled={isFilled} onClick={onClick} />;
};
