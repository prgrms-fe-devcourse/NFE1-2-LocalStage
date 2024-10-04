import { PTrailerVideo } from '@/components/PTrailerVideo';
import { PTrailerDesc } from '@/components/PTrailerDesc';
import * as S from './styles';
import { VItemType } from '@/types/vItem';
export const PTrailer = ({ postSrc, vId, vTitle, width = '100%' }: VItemType) => {
  return (
    <S.PTrailer width={width}>
      <PTrailerVideo vId={vId} />
      <PTrailerDesc src={postSrc} vTitle={vTitle} />
    </S.PTrailer>
  );
};
