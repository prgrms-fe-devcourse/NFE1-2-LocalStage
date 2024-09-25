import * as S from './styles';

export const Header = () => {
  return (
      <S.HeaderContainer>
        <S.StyledHeader>
          <S.Logo>
            <img src="src/assets/imgs/localstage_logo.svg" alt="Logo" />
          </S.Logo>
          <S.SearchBarContainer>
            <S.SearchBar placeholder="공연을 검색해보세요." />
            <S.SearchIcon>
              <img src="src/assets/imgs/search.png" alt="Search" />
            </S.SearchIcon>
          </S.SearchBarContainer>
          <S.IconContainer>
            <div>
              <img src="src/assets/imgs/rank.png" alt="Rank" />
            </div>
            <div>
              <img src="src/assets/imgs/mypage.png" alt="mypage" />
            </div>
          </S.IconContainer>
        </S.StyledHeader>
      </S.HeaderContainer>
  );
};
