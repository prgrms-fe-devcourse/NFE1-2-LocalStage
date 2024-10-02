import styled from 'styled-components';

interface StyledPaginationButtonProps {
  $isActive: boolean;
}

export const PaginationButton = styled.button<StyledPaginationButtonProps>`
  padding: 5px 8px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : theme.colors.white)};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
`;
