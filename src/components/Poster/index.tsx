import extractNumber from '@/utils/extractNumber';
import * as S from './styles';

interface PosterProps {
  src: string;
  width?: string;
  rank?: number;
}

export const Poster = ({ src, width = '100%', rank }: PosterProps) => {
  const height = (4 / 3) * extractNumber(width) + width.replace(extractNumber(width).toString(), '');
  return (
    <S.Poster width={width} height={height}>
      <img alt="poster" src={src}></img>
      {rank && <S.Rank>{rank}</S.Rank>}
    </S.Poster>
  );
};
