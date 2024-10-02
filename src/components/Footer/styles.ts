import { Seperator } from '@/components/Seperator';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledFooter = styled.div`
  max-width: ${props => props.theme.layout.max_width};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
