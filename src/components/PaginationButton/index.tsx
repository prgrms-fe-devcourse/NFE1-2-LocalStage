import React from 'react';
import * as S from './styles';

interface PaginationButtonProps {
  number: number; // 페이지 번호
  isActive: boolean; // 현재 활성화된 페이지인지 여부
  onClick: (number: number) => void; // 클릭 이벤트 핸들러
}

export const PaginationButton = ({ number, isActive, onClick }: PaginationButtonProps) => {
  return (
    <S.PaginationButton $isActive={isActive} onClick={() => onClick(number)}>
      {number}
    </S.PaginationButton>
  );
};

export default PaginationButton;
