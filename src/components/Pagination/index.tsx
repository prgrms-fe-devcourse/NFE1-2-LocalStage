import React from 'react';
import { PrevButton } from '../PrevButton';
import { NextButton } from '../NextButton';
import { PaginationButtonContainer } from '../PaginationButtonContainer';
import * as S from './styles';

interface PaginationProps {
  defaultPage: number;
  itemsPerPage: number;
  totalItemsCount: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ defaultPage, itemsPerPage, totalItemsCount, onPageChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState(defaultPage);
  const totalPages = Math.ceil(totalItemsCount / itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(defaultPage);
  }, [defaultPage]);

  const onPrevClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const onNextClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const onPageButtonClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <S.PaginationWrapper>
      <PrevButton onClickPrevButton={onPrevClick} disabled={currentPage === 1} />
      <PaginationButtonContainer currentPage={currentPage} totalPages={totalPages} onPageChange={onPageButtonClick} />
      <NextButton onClickNextButton={onNextClick} disabled={currentPage === totalPages} />
    </S.PaginationWrapper>
  );
};

export default Pagination;
