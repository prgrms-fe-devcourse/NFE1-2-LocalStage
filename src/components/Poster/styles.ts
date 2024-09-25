import { styled } from 'styled-components';

export const Poster = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${props => props.width}%;
  padding-top: ${props => props.height}%;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
