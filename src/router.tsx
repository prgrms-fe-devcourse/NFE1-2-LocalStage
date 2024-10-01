import DetailPage from '@/pages/DetailPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import RankPage from '@/pages/RankPage';
import SearchPage from '@/pages/SearchPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <>에러 페이지 입니다.</>,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
      {
        path: 'rank',
        element: <RankPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
