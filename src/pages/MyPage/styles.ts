import { styled } from 'styled-components';

export const MyPage = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.max_width};
`;

export const LoaderWrapper = styled.div`
  height: calc(100vh - 78px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
