import { useCallback, useState } from 'react';
import * as S from './styles';
import { SquareButton } from '@/components/SquareButton';

interface ButtonItem {
  id: string;
  label: string;
  onClick?: () => void;
}

interface SquareButtonContainerProps {
  buttonList: Array<ButtonItem>;
  onActiveChange?: (id: string) => void;
}

export const SquareButtonContainer = ({ buttonList, onActiveChange }: SquareButtonContainerProps) => {
  const [activeButtonId, setActiveButtonId] = useState<string | null>(buttonList[0]?.id || null);

  const handleClick = useCallback(
    (id: string, onClick?: () => void) => () => {
      setActiveButtonId(id);
      onActiveChange?.(id);
      onClick?.();
    },
    [onActiveChange],
  );

  return (
    <S.SquareButtonContainer>
      {buttonList.map(({ id, label, onClick }) => (
        <SquareButton key={id} label={label} isActive={id === activeButtonId} onClick={handleClick(id, onClick)} />
      ))}
    </S.SquareButtonContainer>
  );
};
