import { styled } from 'styled-components';

export const Panel = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

export const Title = styled.div`
  margin: 3rem 0;
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  margin: 3rem auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  & > span {
    margin-right: 1rem;
  }
`;
