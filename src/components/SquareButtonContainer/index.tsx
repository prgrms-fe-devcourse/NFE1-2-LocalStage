import { useState } from 'react';
import * as S from './styles';
import { SquareButton } from '@/components/SquareButton';

interface ButtonProps {
  id: string;
  text: string;
  onButtonClick?: () => void;
}

interface SquareButtonContainerProps {
  buttonPropsList: ButtonProps[];
  onActiveButtonChange?: (id: string) => void;
}

export const SquareButtonContainer = ({ buttonPropsList, onActiveButtonChange }: SquareButtonContainerProps) => {
  const [activeButtonId, setActiveButtonId] = useState(buttonPropsList[0]?.id || '');

  const onClick = (id: string, onButtonClick?: () => void) => () => {
    setActiveButtonId(id);
    onActiveButtonChange?.(id);
    onButtonClick?.();
  };

  return (
    <S.SquareButtonContainer>
      {buttonPropsList.map(({ id, text, onButtonClick }) => (
        <SquareButton key={id} isActive={id === activeButtonId} onClick={onClick(id, onButtonClick)} type="submit">
          {text}
        </SquareButton>
      ))}
    </S.SquareButtonContainer>
  );
};
