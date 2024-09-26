import * as S from './styles';

interface PosterProps {
  src: string;
  width?: number;
  height?: number;
}

export const Poster = ({ src, width = 100, height = (4 / 3) * width }: PosterProps) => {
  return (
    <S.Poster width={width} height={height}>
      <img alt="poster" src={src}></img>
    </S.Poster>
  );
};
