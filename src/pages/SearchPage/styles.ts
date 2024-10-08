import { styled } from 'styled-components';
export const SearchPage = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.max_width};
`;
export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
`;
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
`;

export const NoResultIconContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  height: 100vh;
`;
