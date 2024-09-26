import { DetailImage } from '@/components/DetailImage';
import * as S from './styles';

interface DetailImageContainerProps {
  detailImgList: { src: string }[];
}

export const DetailImageContainer = ({ detailImgList }: DetailImageContainerProps) => {
  return (
    <S.DetailImageContainer>
      {detailImgList.map((detailImg, index) => (
        <DetailImage key={index} src={detailImg.src} />
      ))}
    </S.DetailImageContainer>
  );
};
