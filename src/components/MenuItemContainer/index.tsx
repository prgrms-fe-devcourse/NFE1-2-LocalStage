import { MenuItem } from '@/components/MenuItem';
import * as S from './styles';
import { useState } from 'react';

interface MenuItemContainerProps {
  items: string[];
}

export const MenuItemContainer = ({ items }: MenuItemContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.MenuItemContainer>
      {items.map((item, index) => (
        <S.MenuItem key={item}>
          <MenuItem item={item} active={index === activeItem} onClick={() => setActiveItem(index)} />
          {index < items.length - 1 && <S.VerticalBar />}
        </S.MenuItem>
      ))}
    </S.MenuItemContainer>
  );
};
