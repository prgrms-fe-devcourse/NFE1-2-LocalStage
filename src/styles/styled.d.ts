import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      max_width: string;
    };
    colors: {
      black: string;
      gray: string;
      text_gray: string;
      bg_gray: string;
      white: string;
      primary: string;
      text_primary: string;
      yellow: string;
      silver: string;
      bronze: string;
    };
    border: {
      default: string;
    };
  }
}
