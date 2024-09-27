import { PCard } from '@/components/PCard';
import * as S from './styles';
import { PListResponseType } from '@/types/apis';

interface PCardGridProps {
  pList: PListResponseType;
  width?: string;
  rows?: number;
  columns?: number;
  gap?: number;
  isRanked?: boolean;
}

export const PCardGrid = ({
  pList,
  width = '600px',
  rows = 1,
  columns = 5,
  gap = 10,
  isRanked = false,
}: PCardGridProps) => {
  return (
    <S.PCardGrid width={width} rows={rows} columns={columns} gap={gap}>
      {pList.dbs?.map((perform, index) => (
        <PCard key={index} pInfo={perform.db} width="100%" {...(isRanked && { rank: index + 1 })}></PCard>
      ))}
    </S.PCardGrid>
  );
};
