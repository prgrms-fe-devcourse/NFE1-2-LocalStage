import * as S from './styles';
import { PDetailInfo } from '@/components/PDetailInfo';
import { PDetailReviewForm } from '@/components/PDetailReviewForm';
import { PDetailType } from '@/types/pDetail';

interface PosterWithDetailInfoProps extends PDetailType {
  posterSrc: string;
  initialIsHeartFilled?: boolean;
  posterWidth?: string;
  width?: string;
  height?: string;
  isNameInclude?: boolean;
  onHeartClick?: (isHeartFilled: boolean) => void;
  onUpdateScore?: (newScore: number) => void;
}

export const PosterWithDetailInfo = ({
  width = '70%',
  posterWidth = '30%',
  fId,
  pId,
  ...rest
}: PosterWithDetailInfoProps) => {
  return (
    <S.PosterWithDetailInfo width={width}>
      <S.StyledPosterWithButtons width={posterWidth} shareUrl={window.location.href} id={fId} {...rest} />
      <S.PDetailContainer>
        <PDetailInfo width="100%" fId={fId} pId={pId} {...rest} />
        <PDetailReviewForm pId={pId} score={0} />
      </S.PDetailContainer>
    </S.PosterWithDetailInfo>
  );
};
