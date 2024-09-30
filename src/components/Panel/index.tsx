import { ReactNode } from 'react';
import * as S from './styles';
import { H32 } from '@/components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
interface PanelProps {
  children: ReactNode;
  title: string;
  btnText?: string | null;
  width?: string;
}

export const Panel = ({ children, title, btnText = null, width = '600px' }: PanelProps) => {
  return (
    <S.Panel width={width}>
      <S.Title>
        <H32>{title}</H32>
      </S.Title>
      {children}
      {btnText ? (
        <S.Button>
          <span>{btnText} </span>
          <FontAwesomeIcon icon={faChevronRight} />
        </S.Button>
      ) : (
        <></>
      )}
    </S.Panel>
  );
};
