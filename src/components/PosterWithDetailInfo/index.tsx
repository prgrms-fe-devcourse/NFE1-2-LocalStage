import { PosterWithButtons } from '@/components/PosterWithButtons';
import * as S from './styles';
import { PDetailInfo } from '@/components/PDetailInfo';
import { PDetailReviewForm } from '@/components/PDetailReviewForm';

interface PosterWithDetailInfoProps {
  src: string;
  url: string;
  initialIsHeartFilled?: boolean;
  poster_width?: string;
  name: string;
  category: string;
  place: string;
  duration: string;
  time: number;
  spectator: string;
  price: number;
  score: number;
  height?: string;
  isNameInclude?: boolean;
  placeInfo: {
    phone: string;
    address: string;
    url: string;
    latitude: number;
    longitude: number;
  };
  onHeartClick?: (isHeartFilled: boolean) => void;
  onUpdateScore?: (newScore: number) => void;
}

export const PosterWithDetailInfo = ({ poster_width, ...rest }: PosterWithDetailInfoProps) => {
  return (
    <S.PosterWithDetailInfo>
      <PosterWithButtons width={poster_width} {...rest} />
      <S.PinfoContainer>
        <PDetailInfo width="100%" {...rest} />
        <PDetailReviewForm />
      </S.PinfoContainer>
    </S.PosterWithDetailInfo>
  );
};
