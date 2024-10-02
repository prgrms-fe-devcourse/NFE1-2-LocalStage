import * as S from './styles';
interface PTrailerVideoProps {
  src: string;
  width?: string;
}
export const PTrailerVideo = ({ src, width = '100%' }: PTrailerVideoProps) => {
  return (
    <S.PTrailerVideo width={width}>
      <iframe src={`https://www.youtube.com/embed/${src}`} />
    </S.PTrailerVideo>
  );
};
