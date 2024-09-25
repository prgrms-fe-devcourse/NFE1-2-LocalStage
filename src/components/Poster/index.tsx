import * as S from './styles';

interface PosterProps {
  src: string;
  width?: number;
  height?: number;
}

export const Poster = ({ src, width = 235, height = 330 }: PosterProps) => {
  return <S.Poster alt="poster" src={src} width={width} height={height}></S.Poster>;
};
