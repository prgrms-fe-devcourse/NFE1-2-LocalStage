import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faSearch} />
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
