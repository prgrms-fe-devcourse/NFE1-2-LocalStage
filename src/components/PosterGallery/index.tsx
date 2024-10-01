import { CommonResponseType } from '@/types/apis';
import * as S from './styles';
import { Poster } from '@/components/Poster';
import { PosterWithDesc } from '@/components/PosterWithDesc';

interface PosterGalleryProps {
  /**
   * Omit<PListResponseType, 'genrenm' | 'prfstate' | 'openrun' | 'area'> 과 동일
   */
  pList: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto'>[];
  width?: string;
  gap?: string;
}

export const PosterGallery = ({ pList, width = '600px', gap = '10px' }: PosterGalleryProps) => {
  return (
    <S.PosterGallery width={width} gap={gap}>
      {pList
        .slice(0, 7)
        .map((perform, index) =>
          index === 0 ? (
            <PosterWithDesc
              src={perform.poster}
              title={perform.prfnm}
              place={perform.fcltynm}
              date={perform.prfpdfrom + '-' + perform.prfpdto}
              width="100%"
            />
          ) : (
            <Poster key={index} src={perform.poster} />
          ),
        )}
    </S.PosterGallery>
  );
};
