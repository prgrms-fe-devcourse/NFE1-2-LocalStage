import { styled } from 'styled-components';

export const Poster = styled.img<{ width: number; height: number }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover;
`;
