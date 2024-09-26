import styled from 'styled-components';

export const SquareButton = styled.button<{ isActive: boolean }>`
  padding: 15px 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.white)};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.black)};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
`;
