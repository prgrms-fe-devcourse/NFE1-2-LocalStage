import * as S from './styles';
import { faSearch, faRankingStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'assets/imgs/localstage_logo.svg?react';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const search = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`);
    }
  };

  return (
    <S.HeaderContainer>
      <S.StyledHeader>
        <Logo cursor="pointer" onClick={() => navigate('/')} />
        <S.SearchBarContainer>
          <S.SearchBar
            placeholder="공연을 검색해보세요."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') search();
            }}
          />
          <S.SearchIcon onClick={search}>
            <S.StyledFontAwesomeIcon icon={faSearch} $isSearch />
          </S.SearchIcon>
        </S.SearchBarContainer>
        <S.IconContainer>
          <S.StyledFontAwesomeIcon icon={faRankingStar} $isRanked />
          <S.StyledFontAwesomeIcon icon={faUser} />
        </S.IconContainer>
      </S.StyledHeader>
    </S.HeaderContainer>
  );
};
