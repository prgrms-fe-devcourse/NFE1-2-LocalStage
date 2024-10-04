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

  const onClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onClickPagination(pageNumber);
  };

  React.useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  const onPrevClick = () => onClick(Math.max(1, currentPage - 1));
  const onNextClick = () => onClick(Math.min(totalPages, currentPage + 1));

  return (
    <S.PaginationWrapper>
      <PrevButton onClickPrevButton={onPrevClick} disabled={currentPage === 1} />
      <PaginationButtonContainer
        currentPage={currentPage}
        totalPages={totalPages}
        onClickPaginationButtonCon={onClick}
      />
      <NextButton onClickNextButton={onNextClick} disabled={currentPage === totalPages} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
