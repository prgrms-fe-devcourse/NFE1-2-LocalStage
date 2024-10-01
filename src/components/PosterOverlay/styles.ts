import { styled } from 'styled-components';

export const PosterOverlay = styled.div<{ width: string }>`
  padding: 2rem 0;
  width: ${({ width }) => width};
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
