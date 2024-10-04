import React from 'react';
import { PrevButton } from '../PrevButton';
import { NextButton } from '../NextButton';
import { PaginationButtonContainer } from '../PaginationButtonContainer';
import * as S from './styles';

interface PaginationProps {
  defaultPage: number;
  itemsPerPage: number;
  totalItemsCount: number;
  onClickPagination: (pageNumber: number) => void;
}

export const Pagination = ({ defaultPage, itemsPerPage, totalItemsCount, onClickPagination }: PaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState(defaultPage);
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  const onClick = (pageNumber: number) => () => {
    setCurrentPage(pageNumber);
    onClickPagination(pageNumber);
  };

  React.useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  return (
    <S.PaginationWrapper>
      <PrevButton onClickPrevButton={onClick(currentPage - 1)} disabled={currentPage === 1} />
      <PaginationButtonContainer
        currentPage={currentPage}
        totalPages={totalPages}
        onClickPaginationButtonCon={onClick}
      />
      <NextButton onClickNextButton={onClick(currentPage + 1)} disabled={currentPage === totalPages} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
