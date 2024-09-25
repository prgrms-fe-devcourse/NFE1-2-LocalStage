import * as S from './styles';

interface PosterProps {
  src?: string;
  width?: number;
  height?: number;
}

export const Poster = (props: PosterProps) => {
  const { src = 'http://placehold.co/235x330?text=poster', width = 235, height = 330 } = props;
  return <S.Poster alt="poster" src={src} width={width} height={height}></S.Poster>;
};
