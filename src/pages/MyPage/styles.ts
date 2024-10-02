import { styled } from 'styled-components';

export const MyPage = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.max_width};
`;