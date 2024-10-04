import { PCard } from '@/components/PCard';
import * as S from './styles';
import { PItemType } from '@/types/pItem';

interface PCardGridProps {
  pList: PItemType[];
  width?: string;
  gap?: string;
  rows?: number;
  columns?: number;
}

export const PCardGrid = ({ pList, width = '600px', rows = 1, columns = 5, gap = '10px' }: PCardGridProps) => {
  return (
    <S.PCardGrid width={width} rows={rows} columns={columns} gap={gap}>
      {pList.map((perform, index) => (
        <PCard key={index} {...perform} width="100%" rank={index + 1}></PCard>
      ))}
    </S.PCardGrid>
  );
};
