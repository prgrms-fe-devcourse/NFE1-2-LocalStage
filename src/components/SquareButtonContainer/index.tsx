import * as S from './styles';
import { SquareButton } from '@/components/SquareButton';

interface ButtonProps<T extends string> {
  id: T;
  text: string;
  onButtonClick?: () => void;
}

interface SquareButtonContainerProps<T extends string> {
  buttonPropsList: ButtonProps<T>[];
  activeButtonId: T;
  onActiveButtonChange: (id: T) => void;
}

export function SquareButtonContainer<T extends string>({
  buttonPropsList,
  activeButtonId,
  onActiveButtonChange,
}: SquareButtonContainerProps<T>) {
  const onClick = (id: T, onButtonClick?: () => void) => () => {
    onActiveButtonChange(id);
    onButtonClick?.();
  };

  return (
    <S.SquareButtonContainer>
      {buttonPropsList.map(({ id, text, onButtonClick }) => (
        <SquareButton key={id} isActive={id === activeButtonId} onClick={onClick(id, onButtonClick)} type="button">
          {text}
        </SquareButton>
      ))}
    </S.SquareButtonContainer>
  );
}
