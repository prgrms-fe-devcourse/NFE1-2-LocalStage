import { styled } from 'styled-components';

export const PCard = styled.div<{ width: string }>`
  width: ${props => props.width};
  overflow: hidden;
  & > div:nth-child(1) {
    overflow: hidden;
    border-radius: 1rem;
  }
`;

export const PCardText = styled.div`
  & > * {
    padding: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
