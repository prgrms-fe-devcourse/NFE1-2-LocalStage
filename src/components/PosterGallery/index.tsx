import { CommonResponseType } from '@/types/apis';
import * as S from './styles';
import { Poster } from '@/components/Poster';
import { PosterWithDesc } from '@/components/PosterWithDesc';

interface PosterGalleryProps {
  pList: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto'>[];
  width?: string;
  gap?: number;
}

export const PosterGallery = ({ pList, width = '600px', gap = 10 }: PosterGalleryProps) => {
  return (
    <S.PosterGallery width={width} gap={gap}>
      {pList.map((perform, index) =>
        index === 0 ? (
          <PosterWithDesc
            src={perform.poster}
            title={perform.prfnm}
            date={perform.prfpdfrom + '-' + perform.prfpdto}
            width="100%"
          ></PosterWithDesc>
        ) : (
          <Poster key={index} src={perform.poster}></Poster>
        ),
      )}
    </S.PosterGallery>
  );
};
