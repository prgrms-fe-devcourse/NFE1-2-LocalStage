import { styled } from 'styled-components';

export const Poster = styled.img<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
`;
