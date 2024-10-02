import * as S from './styles';
interface PTrailerVideoProps {
  vId: string;
  width?: string;
}
export const PTrailerVideo = ({ vId, width = '100%' }: PTrailerVideoProps) => {
  return (
    <S.PTrailerVideo width={width}>
      <iframe src={`https://www.youtube.com/embed/${vId}`} />
    </S.PTrailerVideo>
  );
};
