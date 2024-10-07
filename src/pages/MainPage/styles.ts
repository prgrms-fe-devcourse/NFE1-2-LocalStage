import { Panel } from '@/components/Panel/styles';
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
  & > div:nth-of-type(2) {
    text-align: start;
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;
export const BannerContainer = styled.div``;
export const PerformVideo = styled(Panel)``;
export const PopularPerforms = styled(Panel)``;
export const CommingSoon = styled(Panel)``;

export const Loader = styled.div`
  & > div {
    padding: 5rem 0;
    justify-content: center;
  }
`;
