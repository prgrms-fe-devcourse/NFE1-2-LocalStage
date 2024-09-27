import { H24, P16 } from '@/components/Text';
import * as S from './styles';

interface BannerProps {
  title: string;
  place: string;
  date: string;
  src: string;

  width?: number;
  height?: number;
}

export const Banner = ({ src, title, place, date, width = 100, height = 30 }: BannerProps) => {
  return (
    <S.Banner width={width} height={height}>
      <img src={src} alt="banner"></img>
      <S.Text>
        <H24>{title}</H24>
        <P16>{place}</P16>
        <P16>{date}</P16>
      </S.Text>
    </S.Banner>
  );
};
