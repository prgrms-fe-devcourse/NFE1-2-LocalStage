import { MenuItem } from '@/components/MenuItem';
import * as S from './styles';
import { useState } from 'react';
import { Seperator } from '@/components/Seperator';

interface MenuItemContainerProps {
  menuItemList: string[];
}

export const MenuItemContainer = ({ menuItemList }: MenuItemContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.MenuItemContainer>
      {menuItemList.map((item, index) => (
        <S.MenuItemWrapper>
          <MenuItem key={item} item={item} active={index === activeItem} onClick={() => setActiveItem(index)} />
          {index < menuItemList.length - 1 && <Seperator />}
        </S.MenuItemWrapper>
      ))}
    </S.MenuItemContainer>
  );
};
