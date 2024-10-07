import { styled } from 'styled-components';

export const PCardSlider = styled.div<{ width: string; gap: string }>`
  width: ${({ width }) => width};
  margin: auto;
  .slick-prev::before,
  .slick-next::before {
    color: ${({ theme }) => theme.colors.gray};
  }
  .slick-slide {
    padding: 0 ${({ gap }) => gap};
  }
`;
