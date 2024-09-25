import styled from 'styled-components';
import { P15 } from '@/components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
`;

export const StyledHeader = styled.div`
  max-width: ${props => props.theme.layout.max_width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 200px;
  }
  cursor: pointer;
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 500px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px 40px 10px 20px;
  border-radius: 50px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.grey};

  &::placeholder {
    color: ${props => props.theme.colors.text_gray};
    font-family: 'Noto Sans KR', sans-serif;
    ${P15};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);

  & > img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-left: 20px;
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{ isRangking?: boolean; isSearch?: boolean }>`
  font-size: ${({ isSearch }) => (isSearch ? '15px' : '25px')};
  color: ${({ theme, isRangking }) => (isRangking ? theme.colors.primary : theme.colors.black)};
  cursor: pointer;
`;
