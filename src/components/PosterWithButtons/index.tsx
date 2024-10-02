import { Poster } from '@/components/Poster';
import { ShareButton } from '@/components/ShareButton';
import { HeartButton } from '@/components/HeartButton';
import * as S from './styles';
import { useState } from 'react';

interface PosterWithButtonsProps {
  src: string;
  url: string;
  initialIsFilled?: boolean;
  width?: number;
}

export const PosterWithButtons = ({ src, url, initialIsFilled = false, width = 20 }: PosterWithButtonsProps) => {
  const [isFilled, setIsFilled] = useState(initialIsFilled);

  const onClickHeart = () => {
    setIsFilled(prev => !prev);
  };

  return (
    <S.PosterWithButtons width={width}>
      <Poster src={src} width={100} rank={null} />
      <S.PosterButtonContainer>
        <S.HeartBtnWithText>
          <HeartButton initialFilled={isFilled} onClickHeartButton={onClickHeart} />
          <p>찜하기</p>
        </S.HeartBtnWithText>
        <ShareButton url={url} />
      </S.PosterButtonContainer>
    </S.PosterWithButtons>
  );
};
