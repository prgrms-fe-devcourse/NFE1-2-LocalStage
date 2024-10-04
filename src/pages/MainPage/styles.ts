import { Panel } from '@/components/Panel/styles';
// import { Panel } from '@/components/Panel';
import { styled } from 'styled-components';

export const MainPage = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.max_width};

  & > div {
    padding: 50px 0;
  }
`;
export const GenreRank = styled(Panel)`
  text-align: center;
  & > div:last-child {
    margin-top: 30px;
    text-align: start;
  }
`;

export const PopularPerforms = styled(Panel)``;
export const CommingSoon = styled(Panel)``;
