import DetailPage from '@/pages/DetailPage';
import MyPage from '@/pages/MyPage';
import RankPage from '@/pages/RankPage';
import SearchPage from '@/pages/SearchPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
      </>
    ),
    errorElement: <>에러 페이지 입니다.</>,
    children: [
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
