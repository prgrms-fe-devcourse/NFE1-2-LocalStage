import { DetailImage } from '@/components/DetailImage';
import * as S from './styles';

interface DetailImageContainerProps {
  detailImgList: { id: string; src: string }[];
}

export const DetailImageContainer = ({ detailImgList }: DetailImageContainerProps) => {
  return (
    <S.DetailImageContainer>
      {detailImgList.map(detailImg => (
        <DetailImage key={detailImg.id} src={detailImg.src} />
      ))}
    </S.DetailImageContainer>
  );
};
