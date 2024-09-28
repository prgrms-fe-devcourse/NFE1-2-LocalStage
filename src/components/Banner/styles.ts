import { styled } from 'styled-components';

export const Banner = styled.div<{ width: number; height: number }>`
  position: relative;
  width: ${({ width }) => width}%;
  padding-top: ${({ height }) => height}%;
  max-width: 1280px;
  margin: auto;
  overflow: hidden;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1280px) {
    padding-top: 300px;
  }
`;
export const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  & > h2 {
    margin-bottom: 5rem;
  }
  & > p {
    margin-bottom: 1rem;
    width: 80%;
  }
`;
