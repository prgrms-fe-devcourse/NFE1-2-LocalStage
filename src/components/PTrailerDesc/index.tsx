import { Poster } from '@/components/Poster';
import * as S from './styles';
import { P16 } from '@/components/Text';

interface PTrailerDescProps {
  src: string;
  vTitle: string;
  width?: string;
}

export const PTrailerDesc = ({ src, vTitle, width = '100%' }: PTrailerDescProps) => {
  return (
    <S.PTrailerDesc width={width}>
      <Poster src={src} width="50px"></Poster>
      <P16>{vTitle}</P16>
    </S.PTrailerDesc>
  );
};
