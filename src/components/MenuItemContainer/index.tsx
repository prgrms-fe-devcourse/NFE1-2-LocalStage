import { MenuItem } from '@/components/MenuItem';
import * as S from './styles';
import { useState } from 'react';
import { Seperator } from '@/components/Seperator';

interface MenuItemContainerProps {
  menuItemList: string[];
  onMenuItemChange?: (index: number) => void;
}

export const MenuItemContainer = ({ menuItemList, onMenuItemChange }: MenuItemContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const onClick = (index: number) => () => {
    setActiveItem(index);
    onMenuItemChange?.(index);
  };

  return (
    <S.MenuItemContainer>
      {menuItemList.map((item, index) => (
        <S.MenuItemWrapper>
          <MenuItem key={item} item={item} active={index === activeItem} onClick={onClick(index)} />
          {index < menuItemList.length - 1 && <Seperator />}
        </S.MenuItemWrapper>
      ))}
    </S.MenuItemContainer>
  );
};
