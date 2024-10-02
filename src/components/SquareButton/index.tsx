import { ReactNode } from 'react';
import * as S from './styles';

interface SquareButtonProps {
  children: ReactNode;
  isActive?: boolean;
}

export const SquareButton = ({
  isActive = false,
  children,
  ...rest
}: SquareButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.SquareButton $isActive={isActive} {...rest}>
      {children}
    </S.SquareButton>
  );
};
