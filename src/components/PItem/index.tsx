import { HeartButton } from '@/components/HeartButton';
import * as S from './styles';
interface PItemProps {
  id: string;
  rank: number;
  title: string;
  area: string;
  location: string;
  period: string;
  posterUrl: string;
}

export const PItem = ({ rank, title, location, period, posterUrl, area }: PItemProps) => {
  return (
    <S.ItemContainer>
      <S.Rank>{rank}</S.Rank>
      {posterUrl && <S.Poster src={posterUrl} alt={title} />}
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
