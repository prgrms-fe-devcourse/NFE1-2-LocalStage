import { useState, useEffect } from 'react';
import { PrevButton } from '../PrevButton';
import { NextButton } from '../NextButton';
import { PaginationButtonContainer } from '../PaginationButtonContainer';
import * as S from './styles';

interface PaginationProps {
  selectedPage: number;
  itemsPerPage: number;
  totalItemsCount: number;
  onClickPagination: (pageNumber: number) => void;
}

export const Pagination = ({ selectedPage, itemsPerPage, totalItemsCount, onClickPagination }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(selectedPage);
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  const onClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onClickPagination(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(selectedPage);
  }, [selectedPage]);

  const onPrevClick = () => onClick(Math.max(1, currentPage - 1));
  const onNextClick = () => onClick(Math.min(totalPages, currentPage + 1));

  return (
    <S.PaginationWrapper>
      <PrevButton onClickPrevButton={onPrevClick} disabled={currentPage === 1} />
      <PaginationButtonContainer currentPage={currentPage} totalPages={totalPages} onClickPaginationButton={onClick} />
      <NextButton onClickNextButton={onNextClick} disabled={currentPage === totalPages} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
