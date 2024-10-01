import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    padding: 0 10px;
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const Logo = styled.img`
  height: 35px;
  width: 110px;
  object-fit: contain;
  position: relative;
`;
