import { styled } from 'styled-components';

export const PosterGrid = styled.div<{ width: string; rows: number; columns: number; gap: number }>`
  width: ${({ width }) => width};
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: ${({ gap }) => gap}px;
`;
