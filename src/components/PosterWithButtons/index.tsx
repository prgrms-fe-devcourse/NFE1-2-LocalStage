import { Poster } from '@/components/Poster';
import { ShareButton } from '@/components/ShareButton';
import * as S from './styles';

interface PosterWithButtonsProps {
  src: string;
  url: string;
  width?: number;
  rank: number | null;
}

export const PosterWithButtons = ({ src, url, width = 20, rank = null }: PosterWithButtonsProps) => {
  return (
    <S.PosterWithButtons width={width}>
      <Poster src={src} width={100} rank={rank} />
      <S.PosterButtonContainer>
        <S.HeartBtnWithText>
          <ShareButton url={url} />
          <p>찜하기</p>
        </S.HeartBtnWithText>
        <ShareButton url={url} />
      </S.PosterButtonContainer>
    </S.PosterWithButtons>
  );
};
