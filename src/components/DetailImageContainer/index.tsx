import { DetailImage } from '@/components/DetailImage';
import * as S from './styles';

interface DetailImageContainerProps {
  detailImgUrlList: string[];
}

export const DetailImageContainer = ({ detailImgUrlList: detailImgList }: DetailImageContainerProps) => {
  return (
    <S.DetailImageContainer>
      {detailImgList.map((detailImgUrl, index) => (
        <DetailImage key={index} src={detailImgUrl} />
      ))}
    </S.DetailImageContainer>
  );
};
