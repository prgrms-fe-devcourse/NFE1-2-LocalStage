import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  & > a {
    padding: 0 10px;
    position: relative;

    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 20px;
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

export const Logo = styled.img`
  height: 35px;
  width: 110px;
  object-fit: contain;
  position: relative;
  margin: 10px 5px;
`;
