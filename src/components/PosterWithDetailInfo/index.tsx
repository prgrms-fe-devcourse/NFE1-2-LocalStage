import { PosterWithButtons } from '@/components/PosterWithButtons';
import * as S from './styles';
import { PDetailInfo } from '@/components/PDetailInfo';
import { PDetailReviewForm } from '@/components/PDetailReviewForm';
import { PDetailType } from '@/types/pDetail';

interface PosterWithDetailInfoProps extends PDetailType {
  posterSrc: string;
  initialIsHeartFilled?: boolean;
  posterWidth?: string;
  height?: string;
  isNameInclude?: boolean;
  onHeartClick?: (isHeartFilled: boolean) => void;
  onUpdateScore?: (newScore: number) => void;
}

export const PosterWithDetailInfo = ({ posterWidth = '30%', placeInfo, ...rest }: PosterWithDetailInfoProps) => {
  return (
    <S.PosterWithDetailInfo width="80%">
      <PosterWithButtons width={posterWidth} shareUrl={placeInfo.shareUrl} {...rest} />
      <S.PDetailContainer>
        <PDetailInfo width="100%" placeInfo={placeInfo} {...rest} />
        <PDetailReviewForm />
      </S.PDetailContainer>
    </S.PosterWithDetailInfo>
  );
};
