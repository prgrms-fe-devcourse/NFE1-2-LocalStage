import { Poster } from '@/components/Poster';
import { ShareButton } from '@/components/ShareButton';
import { HeartButton } from '@/components/HeartButton';
import * as S from './styles';
import { useState } from 'react';

interface PosterWithButtonsProps {
  src: string;
  url: string;
  initialIsHeartFilled?: boolean;
  width?: string;
  onHeartClick?: (isHeartFilled: boolean) => void;
}

export const PosterWithButtons = ({
  src,
  url,
  initialIsHeartFilled = false,
  width = '20',
  onHeartClick,
}: PosterWithButtonsProps) => {
  const [isHeartFilled, setIsFilled] = useState(initialIsHeartFilled);

  const onClickHeart = () => {
    setIsFilled(prev => !prev);
    if (onHeartClick) {
      onHeartClick(isHeartFilled);
    }
  };

  return (
    <S.PosterWithButtons width={width}>
      <Poster src={src} width="100%" />
      <S.PosterButtonContainer>
        <S.HeartButtonWithText>
          <HeartButton initialFilled={isHeartFilled} onClickHeartButton={onClickHeart} />
          <p>찜하기</p>
        </S.HeartButtonWithText>
        <ShareButton url={url} />
      </S.PosterButtonContainer>
    </S.PosterWithButtons>
  );
};
