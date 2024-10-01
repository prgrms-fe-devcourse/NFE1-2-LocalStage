import { styled } from 'styled-components';

export const PTrailerVideo = styled.div<{ width: string }>`
  width: ${({ width }) => width};

  & > div {
    min-height: 300px;
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }

  & > div > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
