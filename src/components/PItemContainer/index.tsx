import * as S from './styles';
import { PItem } from '@/components/PItem';
import { PListResponseType } from '@/types/apis';

interface PItemContainerProps {
  data: PListResponseType;
  isLoading: boolean;
}

// Pick<CommonResponseType,"area"|"mt20id">

export const PItemContainer = ({ data, isLoading }: PItemContainerProps) => {
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!data || !data.dbs || !data.dbs.db) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <S.PItemContainer>
      {data.dbs.db.map((item, index) => (
        <PItem
          key={item.mt20id}
          rank={index + 1}
          id={item.mt20id}
          title={item.prfnm}
          location={item.fcltynm}
          period={`${item.prfpdfrom} ~ ${item.prfpdto}`}
          posterUrl={item.poster}
          area={item.area}
        />
      ))}
    </S.PItemContainer>
  );
};
