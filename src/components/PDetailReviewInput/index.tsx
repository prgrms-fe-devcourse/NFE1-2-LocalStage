import React, { forwardRef } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  $isSubmitted?: boolean;
}

export const PDetailReviewInput = forwardRef<HTMLTextAreaElement, PDetailReviewInputProps>(
  ({ $isSubmitted, ...rest }, ref) => {
    return (
      <S.PDetailReviewInput
        placeholder="공연에 대한 리뷰를 남겨주세요."
        $isSubmitted={$isSubmitted}
        ref={ref}
        {...rest}
      />
    );
  },
);

PDetailReviewInput.displayName = 'PDetailReviewInput';
