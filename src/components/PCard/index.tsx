import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { PListResponseType } from '@/types/apis';

interface PCardProps {
  performInfo: Exclude<PListResponseType['dbs'], undefined>[number]['db'];
  width?: string;
  rank?: number | null;
}

export const PCard = ({ performInfo, width = '225px', rank = null }: PCardProps) => {
  return (
    <S.PCard width={width}>
      <Poster src={performInfo.poster} rank={rank}></Poster>
      <S.PCardText>
        <H16>{performInfo.prfnm}</H16>
        <P15>{performInfo.fcltynm}</P15>
        <P15>{performInfo.prfpdfrom + '-' + performInfo.prfpdfrom}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
