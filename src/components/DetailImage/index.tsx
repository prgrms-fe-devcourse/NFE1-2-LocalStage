import * as S from './styles';

interface DetailImageProps {
  src: string;
  width?: number;
  height?: number;
}

export const DetailImage = ({ src, width = 1280, height = 1500 }: DetailImageProps) => {
  return <S.DetailImage alt="공연상세정보" src={src} width={width} height={height} />;
};
