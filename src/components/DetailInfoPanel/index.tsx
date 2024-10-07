import { PosterWithDetailInfo } from '@/components/PosterWithDetailInfo';
import * as S from './styles';
import { PDetailType } from '@/types/pDetail';
import { PTitle } from '@/components/PTitle';

interface DetailInfoPanelProps extends PDetailType {
  posterSrc: string;
  initialIsHeartFilled?: boolean;
  posterWidth?: string;
  width?: string;
  height?: string;
  isNameInclude?: boolean;
  title?: string;
  onHeartClick?: (isHeartFilled: boolean) => void;
  onUpdateScore?: (newScore: number) => void;
}

export const DetailInfoPanel = ({
  title,
  width = '70%',
  posterWidth = '30%',
  placeInfo,
  ...rest
}: DetailInfoPanelProps) => {
  return (
    <S.DetailInfoPanel>
      <PTitle title={title ?? ''} {...rest} />
      <PosterWithDetailInfo width={width} posterWidth={posterWidth} placeInfo={placeInfo} {...rest} />
    </S.DetailInfoPanel>
  );
};
