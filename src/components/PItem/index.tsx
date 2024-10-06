import { HeartButton } from '@/components/HeartButton';
import * as S from './styles';
import { Poster } from '@/components/Poster';
interface PItemProps {
  id: string;
  rank: number;
  title: string;
  area: string;
  location: string;
  period: string;
  posterUrl: string;
  onClick?: (id: string) => void;
}

export const PItem = ({ id, rank, title, location, period, posterUrl, area, onClick }: PItemProps) => {
  return (
    <S.ItemContainer onClick={() => onClick && onClick(id)}>
      <S.Rank>{rank}</S.Rank>
      {posterUrl && <Poster src={posterUrl} width="90px" rank={rank} />}
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.Info>{area}</S.Info>
        <S.Info>{location}</S.Info>
        <S.Info>{period}</S.Info>
      </S.InfoContainer>
      <HeartButton />
    </S.ItemContainer>
  );
};
