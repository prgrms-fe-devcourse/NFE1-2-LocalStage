import { Loader } from '@/components/Loader';
import * as S from './styles';
import { PItem } from '@/components/PItem';
import { CommonResponseType } from '@/types/apis';

interface PItemContainerProps {
  data: Pick<CommonResponseType, 'mt20id' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto' | 'poster' | 'area'>[];
  isLoading: boolean;
}

export const PItemContainer = ({ data, isLoading }: PItemContainerProps) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <S.PItemContainer>
      {data.map((item, index) => (
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
