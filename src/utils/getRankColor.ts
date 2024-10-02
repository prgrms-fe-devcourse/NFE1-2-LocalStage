import { DefaultTheme } from 'styled-components';

export default function getRankColor(rank: number, theme: DefaultTheme) {
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
}
