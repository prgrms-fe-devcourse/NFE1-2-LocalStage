import * as S from './styles';
import { H16, P15 } from '@/components/Text';
import { Poster } from '@/components/Poster';

interface PCardProps {
  title: string;
  place: string;
  date: string;
  width?: number;
}

export const PCard = ({ title, place, date, width = 225 }: PCardProps) => {
  return (
    <S.PCard width={width}>
      <Poster src="https://placehold.co/600x400?text=poster" width={100}></Poster>
      <div>
        <H16>{title}</H16>
        <P15>{place}</P15>
        <P15>{date}</P15>
      </div>
    </S.PCard>
  );
};
