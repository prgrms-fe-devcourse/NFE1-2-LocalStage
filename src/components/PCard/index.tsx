import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { PListResponseType } from '@/types/apis';

interface PCardProps {
  pInfo: Exclude<PListResponseType['dbs'], undefined>[number]['db'];
  width?: string;
  rank?: number | null;
}

export const PCard = ({ pInfo, width = '225px', rank = null }: PCardProps) => {
  return (
    <S.PCard width={width}>
      <Poster src={pInfo.poster} rank={rank}></Poster>
      <S.PCardText>
        <H16>{pInfo.prfnm}</H16>
        <P15>{pInfo.fcltynm}</P15>
        <P15>{pInfo.prfpdfrom + '-' + pInfo.prfpdfrom}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
