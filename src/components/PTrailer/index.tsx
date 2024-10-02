import { PTrailerVideo } from '@/components/PTrailerVideo';
import { PTrailerDesc } from '@/components/PTrailerDesc';
import * as S from './styles';

interface PTrailerProps {
  src: string;
  vId: string;
  vTitle: string;
  width?: string;
}

export const PTrailer = ({ src, vId, vTitle, width = '100%' }: PTrailerProps) => {
  return (
    <S.PTrailer width={width}>
      <PTrailerVideo vId={vId} />
      <PTrailerDesc src={src} vTitle={vTitle} />
    </S.PTrailer>
  );
};
