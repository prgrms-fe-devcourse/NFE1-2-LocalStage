import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { PItemType } from '@/types/pItem';
import RankIcon from '@/components/RankIcon';

export const PCard = ({
  id,
  posterUrl,
  name,
  facility,
  period,
  rank,
  width = '225px',
  onCardClick,
}: PItemType & { onCardClick?: (id: string) => void }) => {
  return (
    <S.PCard width={width}>
      <Poster src={posterUrl} rank={rank} id={id} />
      <S.PCardText>
        <H16>{name}</H16>
        <P15>{facility}</P15>
        <P15>{period}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
