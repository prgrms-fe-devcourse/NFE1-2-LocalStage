import * as S from './styles';
import { faSearch, faRankingStar, faUser } from '@fortawesome/free-solid-svg-icons';

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
            <S.StyledFontAwesomeIcon icon={faSearch} isSearch />
          </S.SearchIcon>
        </S.SearchBarContainer>
        <S.IconContainer>
          <S.StyledFontAwesomeIcon icon={faRankingStar} isRanked />
          <S.StyledFontAwesomeIcon icon={faUser} />
        </S.IconContainer>
      </S.StyledHeader>
    </S.HeaderContainer>
  );
};
