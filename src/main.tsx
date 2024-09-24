import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'reset.css';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import GlobalStyle from '@/styles/globalStyle';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
);
