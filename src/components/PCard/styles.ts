import { styled } from 'styled-components';

export const PCard = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  & > div:nth-child(1) {
    overflow: hidden;
    border-radius: 1rem;
  }
`;
