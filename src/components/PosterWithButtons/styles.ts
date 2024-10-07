import { styled } from 'styled-components';

export const PosterWithButtons = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 100%;
  min-width: 300px;
`;

export const PosterButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const HeartButtonWithText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
