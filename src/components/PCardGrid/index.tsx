import { PCard } from '@/components/PCard';
import * as S from './styles';

interface PCardGridProps {
  performList: {
    id: string;
    src: string;
    title: string;
    place: string;
    date: string;
  }[];

  width?: string;
  rows?: number;
  columns?: number;
  gap?: number;
  isRanked?: boolean;
}

export const PCardGrid = ({
  performList,
  width = '600px',
  rows = 1,
  columns = 5,
  gap = 10,
  isRanked,
}: PCardGridProps) => {
  return (
    <S.PCardGrid width={width} rows={rows} columns={columns} gap={gap}>
      {performList.map((perform, index) => (
        <PCard
          key={index}
          src={perform.src}
          title={perform.title}
          place={perform.place}
          date={perform.date}
          width="100%"
          {...(isRanked && { rank: index + 1 })}
        ></PCard>
      ))}
    </S.PCardGrid>
  );
};
