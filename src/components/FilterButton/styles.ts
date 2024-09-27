import { P16 } from '@/components/Text';
import styled from 'styled-components';

export const FilterButton = styled.button<{ $isActive?: boolean }>`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

export const ButtonText = styled(P16)<{ $isActive?: boolean }>`
  writing-mode: vertical-rl;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.text_primary : theme.colors.text_gray)};
`;
