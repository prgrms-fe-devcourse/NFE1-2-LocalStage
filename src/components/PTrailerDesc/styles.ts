import { styled } from 'styled-components';

export const PTrailerDesc = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0 0 1rem 1rem;

  & > div {
    border-radius: 0.5rem;
    overflow: hidden;
    flex-shrink: 0;
  }
  & > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    padding-left: 1rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
