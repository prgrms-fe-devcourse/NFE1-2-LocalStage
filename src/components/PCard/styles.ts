import { styled } from 'styled-components';

export const PCard = styled.div<{ width: string }>`
  width: ${props => props.width};
  overflow: hidden;
  & > div:first-child {
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
  & > p:last-child {
    color: ${props => props.theme.colors.text_gray};
  }
`;
