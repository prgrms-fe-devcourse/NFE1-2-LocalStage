import * as S from './styles';

interface BannerProps {
  src: string;
  width?: string;
  height?: string;
}

export const Banner = ({ src, width = '100%', height = '30%' }: BannerProps) => {
  return (
    <S.Banner width={width} height={height}>
      <img src={src} alt="banner"></img>
    </S.Banner>
  );
};
