import { Poster } from '@/components/Poster';
import * as S from './styles';

interface Poster {
  id: number;
  src: string;
  width?: number;
  height?: number;
}

interface DetailImageContainerProps {
  posters: Poster[];
}

export const DetailImageContainer = ({ posters }: DetailImageContainerProps) => {
  return (
    <S.DetailImageContainer>
      {posters.map(poster => (
        <Poster
          key={poster.id} //
          src={poster.src}
          width={poster.width}
          height={poster.height}
        />
      ))}
    </S.DetailImageContainer>
  );
};
