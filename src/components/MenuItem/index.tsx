import * as S from './styles';

interface MenuItemProps {
  item: string;
  isActive: boolean;
  onClick: () => void;
}

export const MenuItem = ({ item, isActive, onClick }: MenuItemProps) => {
  return (
    <S.MenuItem $isActive={isActive} onClick={onClick}>
      {item}
    </S.MenuItem>
  );
};
