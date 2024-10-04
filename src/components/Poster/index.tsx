import { useNavigate } from 'react-router-dom';
import extractNumber from '@/utils/extractNumber';
import * as S from './styles';

interface PosterProps {
  id?: string;
  src: string;
  width?: string;
  rank?: number;
}

export const Poster = ({ id = '123', src, width = '100%', rank }: PosterProps) => {
  const navigate = useNavigate();
  const navigatePDetail = () => () => {
    if (!id) return;
    navigate(`/detail/:${id}`);
  };
  const height = (4 / 3) * extractNumber(width) + width.replace(extractNumber(width).toString(), '');
  return (
    <S.Poster width={width} height={height} onClick={navigatePDetail()}>
      <img alt="poster" src={src}></img>
      {rank && <S.Rank>{rank}</S.Rank>}
    </S.Poster>
  );
};
