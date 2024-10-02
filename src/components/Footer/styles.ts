import { Seperator } from '@/components/Seperator';
import styled from 'styled-components';
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  & > a {
    padding: 0 10px;
    position: relative;
  }
`;
export const StyledSeperator = styled(Seperator)`
  height: 20px;
`;
export const Logo = styled.img`
  height: 35px;
  width: 110px;
  object-fit: contain;
  position: relative;
  margin: 10px 5px;
`;
