import { useState } from 'react';
import { MenuItemContainer } from '@/components/MenuItemContainer';
import { Pagination } from '@/components/Pagination';
import * as S from './styles';

export const MyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const itemsPerPage = 10;
  const totalItemsCount = 100;

  const menuItemList = ['관심있는 공연', '리뷰한 공연'];

  const onClickMenuItem = (index: number) => {
    setSelectedMenuItem(index);
  };

  const onClickPaginationButton = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // 여기에 페이지 변경 시 데이터를 가져오는 로직 추가
  };

  return (
    <S.MyPage>
      <S.Title>{menuItemList[selectedMenuItem]}</S.Title>
      <MenuItemContainer menuItemList={menuItemList} onMenuItemChange={onClickMenuItem} />
      <S.PerformanceList>{/* 여기에 공연 목록을 렌더링하는 컴포넌트를 추가해야 함 */}</S.PerformanceList>
      <Pagination
        selectedPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItemsCount={totalItemsCount}
        onClickPagination={onClickPaginationButton}
      />
    </S.MyPage>
  );
};

export default MyPage;
