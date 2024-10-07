import { styled } from 'styled-components';

export const PCard = styled.div<{ width: string }>`
  width: ${({ width }) => width};
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

export const PosterWrapper = styled.div`
  position: relative;
  overflow: hidden;

  & > div:last-child {
    position: absolute;
    top: 0;
    left: 0px;
  }
`;
