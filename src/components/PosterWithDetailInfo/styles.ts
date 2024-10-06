import { styled } from 'styled-components';

export const PosterWithDetailInfo = styled.section`
  display: flex;
  margin: 30px auto;
  width: 80%;
  height: fit-content;

  @media (min-width=500px) {
    width: 100%;
  }
`;

export const PDetailContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: 20px;
  min-width: 500px;
`;
