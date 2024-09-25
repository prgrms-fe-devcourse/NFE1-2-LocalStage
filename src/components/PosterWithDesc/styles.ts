import { styled } from 'styled-components';

export const PosterWithDesc = styled.div<{ width: string }>`
  width: ${props => props.width};
`;
export const PosterWithDescText = styled.div`
  text-align: center;

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
