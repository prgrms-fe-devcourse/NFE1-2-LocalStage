import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';

interface PCardProps {
  src: string;
  title: string;
  place: string;
  date: string;
  width?: string;
}

export const PCard = ({ src, title, place, date, width = '225px' }: PCardProps) => {
  return (
    <S.PCard width={width}>
      <Poster src={src}></Poster>
      <S.PCardText>
        <H16>{title}</H16>
        <P15>{place}</P15>
        <P15>{date}</P15>
      </S.PCardText>
    </S.PCard>
  );
};
