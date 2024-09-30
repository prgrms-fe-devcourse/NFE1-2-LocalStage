import React, { useState } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const PDetailReviewInput = ({
  placeholder = '공연에 대한 리뷰를 남겨주세요.',
  value,
  onChange,
  disabled = false,
}: PDetailReviewInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.PDetailReviewInput
      placeholder={placeholder}
      value={value}
      onChange={e => !disabled && onChange?.(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled}
      $isFocused={isFocused}
      $hasValue={!!value}
      $disabled={disabled}
    />
  );
};
