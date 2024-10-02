import { styled } from 'styled-components';

export const PTrailer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  border-radius: 1rem;
  overflow: hidden;
`;
