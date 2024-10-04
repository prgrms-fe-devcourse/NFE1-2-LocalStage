import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';
import { PItemType } from '@/types/pItem';
import { useNavigate } from 'react-router-dom';

export const PCard = ({ id, posterUrl, name, facility, period, rank, width = '225px' }: PItemType) => {
  const navigate = useNavigate();
  const navigatePDetail = () => () => {
    if (!id) return;
    navigate(`/detail/:${id}`);
  };
  return (
    <S.PCard width={width} onClick={navigatePDetail()}>
      <Poster src={posterUrl} rank={rank} />
      <S.PCardText>
        <H16>{name}</H16>
        <P15>{facility}</P15>
        <P15>{period}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
