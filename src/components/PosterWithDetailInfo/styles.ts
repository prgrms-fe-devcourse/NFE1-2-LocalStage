import { styled } from 'styled-components';

export const PosterWithDetailInfo = styled.section<{ width: string }>`
  display: flex;
  margin: 30px auto;
  width: ${({ width }) => width};
`;

export const PDetailContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;
