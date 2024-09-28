import { H24, P16 } from '@/components/Text';
import * as S from './styles';
import { CommonResponseType } from '@/types/apis';

interface BannerProps {
  bInfo: Pick<CommonResponseType, 'prfnm' | 'poster' | 'prfplcnm' | 'pcseguidance' | 'prfpdfrom' | 'prfpdto'>;
  width?: number;
  height?: number;
}

export const Banner = ({ bInfo, width = 100, height = 30 }: BannerProps) => {
  return (
    <S.Banner width={width} height={height}>
      <img src={bInfo.poster} alt="banner"></img>
      <S.Text>
        <H24>{bInfo.prfnm}</H24>
        <P16>{bInfo.prfplcnm}</P16>
        <P16>{bInfo.pcseguidance}</P16>
        <P16>
          {bInfo.prfpdfrom} - {bInfo.prfpdto}
        </P16>
      </S.Text>
    </S.Banner>
  );
};
