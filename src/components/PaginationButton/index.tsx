import * as S from './styles';

interface PaginationButtonProps {
  number: number;
  currentPage: number;
  onClick: (number: number) => void;
}

export const PaginationButton = ({ number, currentPage, onClick }: PaginationButtonProps) => {
  const isActive = number === currentPage;

  return (
    <S.PaginationButton $isActive={isActive} onClick={() => onClick(number)}>
      {number}
    </S.PaginationButton>
  );
};

export default PaginationButton;
