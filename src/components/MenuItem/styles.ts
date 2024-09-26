import { P16 } from '@/components/Text';
import styled from 'styled-components';

export const MenuItem = styled(P16)<{ active: boolean }>`
  cursor: pointer;
  padding: 12px 24px;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text_gray)};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transition: transform 0.3s ease-in-out;
  }
`;
