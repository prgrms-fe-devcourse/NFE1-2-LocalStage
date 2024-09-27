import React, { useState } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const PDetailReviewInput = ({
  placeholder = '공연에 대한 리뷰를 남겨주세요.',
  value,
  onChange,
}: PDetailReviewInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (onChange) {
        onChange(value);
      }
    }
  };

  const isFocus = () => setIsFocused(true);
  const isBlur = () => setIsFocused(false);

  return (
    <S.PDetailReviewInput
      placeholder={placeholder}
      value={value}
      onChange={e => onChange?.(e.target.value)}
      onKeyDown={onKeyDown}
      onFocus={isFocus}
      onBlur={isBlur}
      $isFocused={isFocused}
      $hasValue={!!value}
    />
  );
};
