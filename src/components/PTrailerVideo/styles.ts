import { styled } from 'styled-components';

export const PTrailerVideo = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  padding-bottom: 56.25%; /* 16:9 비율 */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
