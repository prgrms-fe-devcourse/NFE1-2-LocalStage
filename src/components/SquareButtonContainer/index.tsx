import { useState } from 'react';
import * as S from './styles';
import { SquareButton } from '@/components/SquareButton';

interface ButtonItem {
  id: string;
  label: string;
  onClick?: () => void;
}

interface SquareButtonContainerProps {
  buttonList: Array<ButtonItem>;
}

export const SquareButtonContainer = ({ buttonList }: SquareButtonContainerProps) => {
  const [activeButtonId, setActiveButtonId] = useState<string | null>(buttonList[0]?.id || null);

  return (
    <S.SquareButtonContainer>
      {buttonList.map(({ id, label, onClick }) => (
        <SquareButton
          key={id}
          label={label}
          isActive={id === activeButtonId}
          onClick={() => {
            setActiveButtonId(id);
            onClick?.();
          }}
        />
      ))}
    </S.SquareButtonContainer>
  );
};
