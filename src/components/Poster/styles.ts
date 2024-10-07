import { styled } from 'styled-components';

export const Poster = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${({ width }) => width};
  padding-top: ${({ height }) => height};
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: scale 0.2s;
    &:hover {
      scale: 1.05;
    }
  }
`;
export const Rank = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
