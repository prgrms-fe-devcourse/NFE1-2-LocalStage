import { styled } from 'styled-components';

export const PosterWithDetailInfo = styled.section<{ width: string }>`
  display: flex;
  margin: 30px auto;
  width: ${({ width }) => width};
  border: 1px solid blue;
`;

export const PDetailContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  border: 1px solid red;
`;
