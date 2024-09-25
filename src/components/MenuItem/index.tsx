import * as S from './styles';
import { useState } from 'react';

interface MenuItemProps {
  items: string[];
}

export const MenuItem = ({ items }: MenuItemProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.MenuItem>
      {items.map((item, index) => (
        <S.Item key={item} active={index === activeItem} onClick={() => setActiveItem(index)}>
          {item}
        </S.Item>
      ))}
    </S.MenuItem>
  );
};
