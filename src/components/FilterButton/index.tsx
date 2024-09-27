import * as S from './styles';

interface FilterButtonProps {
  text: string;
  $isActive?: boolean;
  onClick?: () => void;
}

export const FilterButton = ({ text, $isActive = false, onClick }: FilterButtonProps) => {
  return (
    <S.FilterButton onClick={onClick}>
      <S.ButtonText $isActive={$isActive}>{text}</S.ButtonText>
    </S.FilterButton>
  );
};
