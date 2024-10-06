import { PTrailerVideo } from '@/components/PTrailerVideo';
import { PTrailerDesc } from '@/components/PTrailerDesc';
import * as S from './styles';
import { VItemType } from '@/types/vItem';
import { useNavigate } from 'react-router-dom';
export const PTrailer = ({ pId, postSrc, vId, vTitle, width = '100%' }: VItemType) => {
  const navigate = useNavigate();
  return (
    <S.PTrailer width={width}>
      <PTrailerVideo vId={vId} />
      <PTrailerDesc
        src={postSrc}
        vTitle={vTitle}
        onClick={() => {
          navigate(`/detail/:${pId}`);
        }}
      />
    </S.PTrailer>
  );
};
