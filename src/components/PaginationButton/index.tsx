import * as S from './styles';

interface PaginationButtonProps {
  pageNumber: number;
  currentPage: number;
  onClickPaginationButton: (page: number) => void;
}

export const PaginationButton = ({ pageNumber, currentPage, onClickPaginationButton }: PaginationButtonProps) => {
  const isActive = pageNumber === currentPage;

  return (
    <S.PaginationButton $isActive={isActive} onClick={() => onClickPaginationButton(pageNumber)}>
      {pageNumber}
    </S.PaginationButton>
  );
};

export default PaginationButton;
