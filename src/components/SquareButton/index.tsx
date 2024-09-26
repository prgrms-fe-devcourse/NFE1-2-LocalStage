import * as S from './styles';

interface SquareButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SquareButton = ({ label, isActive = false, onClick }: SquareButtonProps) => {
  return (
    <S.SquareButton isActive={isActive} onClick={onClick}>
      {label}
    </S.SquareButton>
  );
};
