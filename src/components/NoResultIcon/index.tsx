import * as S from './styles';
import NoResultSVG from '@/assets/imgs/noResultIcon.svg';

export const NoResultIcon = () => {
  return (
    <S.NoResultContainer>
      <S.NoResultIcon src={NoResultSVG} alt="noResultLogo" />
      <S.NoResultText>검색 결과가 존재하지 않습니다.</S.NoResultText>
    </S.NoResultContainer>
  );
};
