import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { CommonResponseType } from '@/types/apis';

interface PCardProps {
  pInfo: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm'> &
    Partial<Pick<CommonResponseType, 'fcltynm' | 'prfpdfrom' | 'prfpdto' | 'prfplcnm' | 'prfpd' | 'rnum'>>;
  width?: string;
}

export const PCard = ({ pInfo, width = '225px' }: PCardProps) => {
  const poster = pInfo.rnum ? 'https://www.kopis.or.kr/' + pInfo.poster : pInfo.poster;
  const place = pInfo.fcltynm ? pInfo.fcltynm : pInfo.prfnm;
  const prf = pInfo.prfpd ? pInfo.prfpd : pInfo.prfpdfrom + '-' + pInfo.prfpdto;
  return (
    <S.PCard width={width}>
      <Poster src={poster} rank={pInfo.rnum} />
      <S.PCardText>
        <H16>{pInfo.prfnm}</H16>
        <P15>{place}</P15>
        <P15>{prf}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
