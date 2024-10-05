import * as S from './styles';
import { FilterButton } from '@/components/FilterButton';

interface FilterButtonContainerProps {
  buttonList: string[];
  activeIndex: number;
  onFilterChange?: (index: number) => void;
}

export const FilterButtonContainer = ({ buttonList, activeIndex, onFilterChange }: FilterButtonContainerProps) => {
  const onClick = (index: number) => () => {
    onFilterChange?.(index);
  };

  return (
    <S.FilterButtonContainer>
      {buttonList.map((text, index) => (
        <S.FilterButtonWrapper key={index}>
          <FilterButton text={text} $isActive={index === activeIndex} onClick={onClick(index)} />
          {index < buttonList.length - 1 && <S.StyledSeperator />}
        </S.FilterButtonWrapper>
      ))}
    </S.FilterButtonContainer>
  );
};
