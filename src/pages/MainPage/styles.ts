import { Panel } from '@/components/Panel/styles';
import { styled } from 'styled-components';

export const MainPage = styled.div`
  & > div {
    max-width: ${({ theme }) => theme.layout.max_width};
    margin: 0 auto;
    padding: 5rem 0;
  }
  @media (max-width: 768px) {
    & > div {
      padding: 1rem 0;
    }
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
export const BannerContainer = styled.div`
  max-width: none !important;
  margin: 5rem 0 !important;
  padding: 0 !important;
  background-color: #4fcb85;
`;
export const PerformVideo = styled(Panel)``;
export const PopularPerforms = styled(Panel)``;
export const CommingSoon = styled(Panel)``;

export const Loader = styled.div`
  & > div {
    padding: 5rem 0;
    justify-content: center;
  }
`;
