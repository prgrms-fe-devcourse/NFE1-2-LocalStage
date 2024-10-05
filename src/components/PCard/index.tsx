import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { PItemType } from '@/types/pItem';
import RankIcon from '@/components/RankIcon';

export const PCard = ({ id, posterUrl, name, facility, period, rank, width = '225px' }: PItemType) => {
  return (
    <S.PCard width={width}>
      <S.PosterWrapper>
        <Poster src={posterUrl} />
        {rank !== undefined && rank > 0 && rank <= 3 && <RankIcon rank={rank as 1 | 2 | 3} />}
      </S.PosterWrapper>
      <S.PCardText>
        <H16>{name}</H16>
        <P15>{facility}</P15>
        <P15>{period}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
