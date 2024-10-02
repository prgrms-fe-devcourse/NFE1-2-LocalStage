import { Poster } from '@/components/Poster';
import * as S from './styles';
import { P16 } from '@/components/Text';

interface PTrailerDescProps {
  src: string;
  videoTitle: string;
  width?: string;
}

export const PTrailerDesc = ({ src, videoTitle, width = '100%' }: PTrailerDescProps) => {
  return (
    <S.PTrailerDesc width={width}>
      <Poster src={src} width="50px"></Poster>
      <P16>{videoTitle}</P16>
    </S.PTrailerDesc>
  );
};
