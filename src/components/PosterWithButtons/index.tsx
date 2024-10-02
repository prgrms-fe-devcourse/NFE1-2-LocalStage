import { Poster } from '@/components/Poster';
import { ShareButton } from '@/components/ShareButton';
import * as S from './styles';
import { HeartButton } from '@/components/HeartButton';

interface PosterWithButtonsProps {
  src: string;
  url: string;
  width?: number;
  rank: number | null;
}

export const PosterWithButtons = ({ src, url, width = 20, rank = null }: PosterWithButtonsProps) => {
  const handleHeartClick = (isFilled: boolean) => {
    // 여기에 찜하기 상태 변경 로직을 구현하세요
    console.log('Heart button clicked, filled:', isFilled);
  };

  return (
    <S.PosterWithButtons width={width}>
      <Poster src={src} width={100} rank={rank} />
      <S.PosterButtonContainer>
        <S.HeartBtnWithText>
          <HeartButton initialFilled={false} onClickHeartButton={handleHeartClick} />
          <p>찜하기</p>
        </S.HeartBtnWithText>
        <ShareButton url={url} />
      </S.PosterButtonContainer>
    </S.PosterWithButtons>
  );
};
