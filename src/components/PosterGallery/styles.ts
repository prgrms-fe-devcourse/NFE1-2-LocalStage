import { styled } from 'styled-components';

export const PosterGallery = styled.div<{ width: string; gap: string }>`
  width: ${({ width }) => width};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 1fr repeat(3, 1.2fr);
  gap: ${({ gap }) => gap};

  & > div:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
`;
