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
  justify-content: center;
  margin-bottom: 20px;
  overflow-x: auto;
`;
export const NoResultIconContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultContainer = styled.div`
  height: 100vh;
`;
