import * as S from './styles';

interface DetailImageProps {
  src: string;
}

export const DetailImage = ({ src }: DetailImageProps) => {
  return <S.DetailImage alt="공연상세정보" src={src} />;
};
