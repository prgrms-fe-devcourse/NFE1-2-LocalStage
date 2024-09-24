import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset.css';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
