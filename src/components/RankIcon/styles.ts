import { H20 } from '@/components/Text';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const RankIconWrapper = styled.div<{ color: string }>`
  position: relative;
  display: inline-block;
  color: ${props => props.color};
  font-size: 48px;
`;

export const RankNumber = styled(H20)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
`;

export const getRankColor = (rank: number, theme: DefaultTheme) => {
  switch (rank) {
    case 1:
      return theme.colors.yellow;
    case 2:
      return theme.colors.silver;
    case 3:
      return theme.colors.bronze;
    default:
      return theme.colors.black;
  }
};
