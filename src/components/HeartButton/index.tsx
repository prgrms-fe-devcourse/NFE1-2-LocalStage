import { useState } from 'react';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

interface HeartButtonProps {
  initialClicked?: boolean;
  onClick?: (isClicked: boolean) => void;
}

export const HeartButton = ({ initialClicked = false, onClick }: HeartButtonProps) => {
  const [isClicked, setIsClicked] = useState(initialClicked);

  const handleClick = () => {
    const newClickedState = !isClicked;
    setIsClicked(newClickedState);
    if (onClick) {
      onClick(newClickedState);
    }
  };

  return <S.HeartButton icon={isClicked ? fasHeart : farHeart} $isClicked={isClicked} onClick={handleClick} />;
};
