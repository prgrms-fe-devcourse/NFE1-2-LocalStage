import { styled } from 'styled-components';

export const DetailImage = styled.img<{ width: number; height: number }>`
  width: 100%;
  height: auto;
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
  object-fit: cover;
`;
