import { styled } from 'styled-components';

export const PCardGrid = styled.div<{ width: string; gap: string; rows: number; columns: number }>`
  margin: auto;
  width: ${({ width }) => width};
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  gap: ${({ gap }) => gap};
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
