import React, { forwardRef } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  $isSubmitted?: boolean;
}

// forwardRef를 사용하여 ref를 전달받을 수 있도록 설정합니다.
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

// forwardRef를 사용할 때 displayName을 설정하여 디버깅 시 컴포넌트 이름을 표시하도록 합니다.
PDetailReviewInput.displayName = 'PDetailReviewInput';
