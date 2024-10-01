import extractNumber from '@/utils/extractNumber';
import * as S from './styles';

interface PosterProps {
  src: string;
  width?: string;
  height?: string;
  rank?: number;
}

export const Poster = ({ src, width = '100%', height = (4 / 3) * extractNumber(width) + '%', rank }: PosterProps) => {
  return (
    <S.Poster width={width} height={height}>
      <img alt="poster" src={src}></img>
      {rank && <S.Rank>{rank}</S.Rank>}
    </S.Poster>
  );
};
