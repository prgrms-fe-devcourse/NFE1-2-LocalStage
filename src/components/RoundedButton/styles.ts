import { styled } from 'styled-components';

export const RoundedButton = styled.button`
  font-weight: 500;
  padding: 0.8rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  & > span {
    margin-right: 1rem;
  }
`;
