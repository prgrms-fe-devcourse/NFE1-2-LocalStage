import * as S from './styles';

interface PaginationButtonProps {
  number: number;
  currentPage: number;
  onClickPaginationButton: (page: number) => void;
}

export const PaginationButton = ({ number, currentPage, onClickPaginationButton }: PaginationButtonProps) => {
  const isActive = number === currentPage;

  const onClick = (page: number) => () => onClickPaginationButton(page);

  return (
    <S.PaginationButton $isActive={isActive} onClick={() => onClick(number)}>
      {number}
    </S.PaginationButton>
  );
};

export default PaginationButton;
