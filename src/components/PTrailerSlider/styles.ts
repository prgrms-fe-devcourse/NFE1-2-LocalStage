import { styled } from 'styled-components';

export const PTrailerSlider = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  .slick-prev::before,
  .slick-next::before {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
