import * as S from './styles';

interface PosterProps {
  src: string;
  width?: string;
  height?: string;
}

export const Poster = ({ src, width = '235px', height = '330px' }: PosterProps) => {
  return <S.Poster alt="poster" src={src} width={width} height={height}></S.Poster>;
};
