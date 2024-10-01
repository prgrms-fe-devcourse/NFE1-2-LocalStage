import { Poster } from '@/components/Poster';
import * as S from './styles';
import { H16, P15 } from '@/components/Text';

interface PosterWithDescProps {
  src: string;
  title: string;
  place: string;
  date: string;
  width?: string;
}

export const PosterWithDesc = ({ src, title, place, date, width = '225px' }: PosterWithDescProps) => {
  return (
    <S.PosterWithDesc width={width}>
      <Poster src={src} />
      <S.Desc>
        <H16>{title}</H16>
        <P15>{place}</P15>
        <P15>{date}</P15>
      </S.Desc>
    </S.PosterWithDesc>
  );
};
