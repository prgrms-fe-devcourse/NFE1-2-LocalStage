import * as S from './styles';
import { useState } from 'react';
import { FilterButton } from '@/components/FilterButton';

interface FilterButtonContainerProps {
  buttonList: string[];
}

export const FilterButtonContainer = ({ buttonList }: FilterButtonContainerProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <S.FilterButtonContainer>
      {buttonList.map((text, index) => (
        <S.FilterButtonWrapper>
          <FilterButton key={index} text={text} $isActive={index === activeItem} onClick={() => setActiveItem(index)} />
          {index < buttonList.length - 1 && <S.StyledSeperator />}
        </S.FilterButtonWrapper>
      ))}
    </S.FilterButtonContainer>
  );
};
