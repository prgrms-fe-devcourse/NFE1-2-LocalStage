import React, { forwardRef } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  defaultValue?: string;
}
export const PDetailReviewInput = forwardRef<HTMLTextAreaElement, PDetailReviewInputProps>(
  ({ defaultValue, ...rest }, ref) => {
    return (
      <S.PDetailReviewInput placeholder="공연에 대한 리뷰를 남겨주세요." ref={ref} {...rest}>
        {defaultValue}
      </S.PDetailReviewInput>
    );
  },
);

PDetailReviewInput.displayName = 'PDetailReviewInput';
