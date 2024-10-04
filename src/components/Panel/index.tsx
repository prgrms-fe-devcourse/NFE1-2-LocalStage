import { ReactNode } from 'react';
import * as S from './styles';
import { H32 } from '@/components/Text';

interface PanelProps {
  children: ReactNode;
  title: string;
  width?: string;
}

export const Panel = ({ children, title, width = '100%' }: PanelProps) => {
  return (
    <S.Panel width={width}>
      <H32>{title}</H32>
      {children}
    </S.Panel>
  );
};
