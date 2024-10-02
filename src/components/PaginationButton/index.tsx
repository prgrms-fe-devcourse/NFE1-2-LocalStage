import * as S from './styles';

interface PaginationButtonProps {
  pageNumber: number;
  currentPage: number;
  onClickPaginationButton: (page: number) => void;
}

export const PaginationButton = ({ pageNumber, currentPage, onClickPaginationButton }: PaginationButtonProps) => {
  const isActive = pageNumber === currentPage;
  const onClick = (pageNumber: number) => () => onClickPaginationButton(pageNumber);

  return (
    <S.PaginationButton $isActive={isActive} onClick={onClick(pageNumber)}>
      {pageNumber}
    </S.PaginationButton>
  );
};

export default PaginationButton;
