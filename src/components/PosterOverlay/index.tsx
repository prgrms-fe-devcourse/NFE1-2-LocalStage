import * as S from './styles';
import { P16 } from '@/components/Text';

interface PosterOverlayProps {
  text: string;
  width?: string;
}

export const PosterOverlay = ({ text, width = '100%' }: PosterOverlayProps) => {
  return (
    <S.PosterOverlay width={width}>
      <P16>{text}</P16>
    </S.PosterOverlay>
  );
};
