import { PCard } from '@/components/PCard';
import * as S from './styles';
import { CommonResponseType } from '@/types/apis';

interface PCardGridProps {
  pList: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto'>[];
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
  console.log(typeof pList);
  return (
    <S.PCardGrid width={width} rows={rows} columns={columns} gap={gap}>
      {pList.map((perform, index) => (
        <PCard key={index} pInfo={perform} width="100%" {...(isRanked && { rank: index + 1 })}></PCard>
      ))}
    </S.PCardGrid>
  );
};
