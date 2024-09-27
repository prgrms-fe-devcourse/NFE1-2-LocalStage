import * as S from './styles';
import { useState } from 'react';
import { FilterButton } from '@/components/FilterButton';

interface FilterButtonContainerProps {
  buttonList: string[];
  onFilterChange?: (index: number) => void;
}

export const FilterButtonContainer = ({ buttonList, onFilterChange }: FilterButtonContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const onClick = (index: number) => () => {
    setActiveItem(index);
    onFilterChange?.(index);
  };

  return (
    <S.FilterButtonContainer>
      {buttonList.map((text, index) => (
        <S.FilterButtonWrapper>
          <FilterButton key={index} text={text} $isActive={index === activeItem} onClick={onClick(index)} />
          {index < buttonList.length - 1 && <S.StyledSeperator />}
        </S.FilterButtonWrapper>
      ))}
    </S.FilterButtonContainer>
  );
};
