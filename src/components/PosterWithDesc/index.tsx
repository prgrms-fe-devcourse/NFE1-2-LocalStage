import { Poster } from '@/components/Poster';
import * as S from './styles';
import { H16, P15 } from '@/components/Text';

interface PosterWithDescProps {
  src: string;
  title: string;
  date: string;
  width?: string;
}

export const PosterWithDesc = ({ src, title, date, width = '225px' }: PosterWithDescProps) => {
  return (
    <S.PosterWithDesc width={width}>
      <Poster src={src}></Poster>
      <S.PosterWithDescText>
        <H16>{title}</H16>
        <P15>{date}</P15>
      </S.PosterWithDescText>
    </S.PosterWithDesc>
  );
};
