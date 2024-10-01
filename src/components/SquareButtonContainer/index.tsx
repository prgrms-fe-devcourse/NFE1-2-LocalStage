import { useState } from 'react';
import * as S from './styles';
import { SquareButton } from '@/components/SquareButton';

interface ButtonItem {
  id: string;
  label: string;
  onButtonClick?: () => void;
}

interface SquareButtonContainerProps {
  buttonList: ButtonItem[];
  onActiveChange?: (id: string) => void;
}

export const SquareButtonContainer = ({ buttonList, onActiveChange }: SquareButtonContainerProps) => {
  const [activeButtonId, setActiveButtonId] = useState(buttonList[0]?.id || '');

  const onClick = (id: string, onButtonClick?: () => void) => () => {
    setActiveButtonId(id);
    onActiveChange?.(id);
    onButtonClick?.();
  };

  return (
    <S.SquareButtonContainer>
      {buttonList.map(({ id, label, onButtonClick }) => (
        <SquareButton key={id} label={label} isActive={id === activeButtonId} onClick={onClick(id, onButtonClick)} />
      ))}
    </S.SquareButtonContainer>
  );
};
