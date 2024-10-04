import * as S from './styles';
import { Poster } from '@/components/Poster';
import { PosterWithDesc } from '@/components/PosterWithDesc';
import { PItemType } from '@/types/pItem';

interface PosterGalleryProps {
  pList: PItemType[];
  width?: string;
  gap?: string;
}

export const PosterGallery = ({ pList, width = '100%', gap = '10px' }: PosterGalleryProps) => {
  return (
    <S.PosterGallery width={width} gap={gap}>
      {pList
        .slice(0, 7)
        .map((perform, index) =>
          index === 0 ? (
            <PosterWithDesc
              key={index}
              src={perform.posterUrl}
              title={perform.name}
              place={perform.facility}
              date={perform.period}
              width="100%"
            />
          ) : (
            <Poster key={index} src={perform.posterUrl} />
          ),
        )}
    </S.PosterGallery>
  );
};
