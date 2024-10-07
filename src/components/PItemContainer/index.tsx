import * as S from './styles';
import { PItem } from '@/components/PItem';
import { CommonResponseType } from '@/types/apis';

interface PItemContainerProps {
  data: Pick<CommonResponseType, 'area' | 'prfplcnm' | 'prfpd' | 'cate' | 'prfnm' | 'rnum' | 'poster' | 'mt20id'>[];
  onItemClick?: (id: string) => void;
}

export const PItemContainer = ({ data, onItemClick }: PItemContainerProps) => {
  return (
    <S.PItemContainer>
      {data.map(item => (
        <PItem
          key={item.mt20id}
          id={item.mt20id}
          rank={item.rnum}
          title={item.prfnm}
          location={item.prfplcnm}
          period={item.prfpd}
          posterUrl={item.poster}
          area={item.area}
          onClick={onItemClick}
        />
      ))}
    </S.PItemContainer>
  );
};
