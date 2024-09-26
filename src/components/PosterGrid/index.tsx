import { Poster } from '@/components/Poster';
import * as S from './styles';

interface PosterGridProps {
  performList: {
    id: string;
    src: string;
  }[];

  width?: string;
  rows?: number;
  columns?: number;
  gap?: number;
}

export const PosterGrid = ({ performList, width = '600px', rows = 2, columns = 3, gap = 10 }: PosterGridProps) => {
  return (
    <S.PosterGrid width={width} rows={rows} columns={columns} gap={gap}>
      {performList.map((perform, index) => (
        <Poster key={index} src={perform.src}></Poster>
      ))}
    </S.PosterGrid>
  );
};
