import * as S from './styles';

interface MenuItemProps {
  item: string;
  active: boolean;
  onClick: () => void;
}

export const MenuItem = ({ item, active, onClick }: MenuItemProps) => {
  return (
    <S.MenuItem active={active} onClick={onClick}>
      {item}
    </S.MenuItem>
  );
};
