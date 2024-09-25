import { useState } from 'react';
import * as S from './styles';

interface MenuItemProps {
  items: string[];
}

export const MenuItem: React.FC<MenuItemProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.MenuWrapper>
      {items.map((item, index) => (
        <S.Item key={item} active={index === activeItem} onClick={() => setActiveItem(index)}>
          {item}
        </S.Item>
      ))}
    </S.MenuWrapper>
  );
};
