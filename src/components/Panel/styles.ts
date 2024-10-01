import { styled } from 'styled-components';

export const Panel = styled.div<{ width: string }>`
  width: ${({ width }) => width};

  & > h2 {
    margin: 3rem 0;
    text-align: center;
  }
`;
