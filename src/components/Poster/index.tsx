import * as S from './styles';

interface PosterProps {
  src: string;
  width?: number;
  height?: number;
  rank: number | null;
}

export const Poster = ({ src, width = 100, height = (4 / 3) * width, rank }: PosterProps) => {
  return (
    <S.Poster width={width} height={height}>
      <img alt="poster" src={src}></img>
      <S.Rank>{rank}</S.Rank>
    </S.Poster>
  );
};
