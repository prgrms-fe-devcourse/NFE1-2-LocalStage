import * as S from './styles';

interface PaginationButtonProps {
  number: number;
  isActive: boolean;
  onClick: (number: number) => void;
}

export const PaginationButton = ({ number, isActive, onClick }: PaginationButtonProps) => {
  return (
    <S.PaginationButton $isActive={isActive} onClick={() => onClick(number)}>
      {number}
    </S.PaginationButton>
  );
};

export default PaginationButton;
