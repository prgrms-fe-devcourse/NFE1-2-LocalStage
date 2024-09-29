import React, { useState, useRef } from 'react';
import * as S from './styles';

interface PDetailReviewInputProps {
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  disabled?: boolean;
}

export const PDetailReviewInput = ({
  placeholder = '공연에 대한 리뷰를 남겨주세요.',
  value,
  onChange,
  onSubmit,
  disabled = false,
}: PDetailReviewInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim() || disabled) return;
    onSubmit?.(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !disabled) {
      e.preventDefault();
      onSubmitForm(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const isFocus = () => !disabled && setIsFocused(true);
  const isBlur = () => setIsFocused(false);

  return (
    <form onSubmit={onSubmitForm}>
      <S.PDetailReviewInput
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={e => !disabled && onChange?.(e.target.value)}
        onKeyDown={onKeyDown}
        onFocus={isFocus}
        onBlur={isBlur}
        $isFocused={isFocused}
        $hasValue={!!value}
        $disabled={disabled}
      />
    </form>
  );
};
