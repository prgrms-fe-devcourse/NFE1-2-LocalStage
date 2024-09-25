import { styled } from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 180px;
    cursor: pointer;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  width: 500px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px 40px 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  outline: none;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;

  & > div {
    margin-left: 20px;
  }
  & > div > img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;
