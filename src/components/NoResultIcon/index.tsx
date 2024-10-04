import * as S from './styles';

export const NoResultIcon = () => {
  return (
    <S.NoResultContainer>
      <S.NoResultIcon src="src/assets/imgs/noResultIcon.svg" alt="noResultLogo" />
      <S.NoResultText>검색 결과가 존재하지 않습니다.</S.NoResultText>
    </S.NoResultContainer>
  );
};
