import * as S from './styles';

export const NoResultIcon = () => {
  return (
    <S.NoResultIcon>
      <S.Icon src="src/assets/imgs/noResultIcon.svg" alt="noResultLogo" />
      <S.Message>검색 결과가 존재하지 않습니다.</S.Message>
    </S.NoResultIcon>
  );
};
