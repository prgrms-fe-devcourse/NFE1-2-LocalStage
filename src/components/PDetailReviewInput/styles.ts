import { styled, css } from 'styled-components';

interface PDetailReviewInputProps {
  $isFocused: boolean;
  $hasValue: boolean;
}

export const PDetailReviewInput = styled.textarea<PDetailReviewInputProps>`
  width: 400px;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;
  background-color: ${({ theme, $isFocused, $hasValue }) =>
    $hasValue || $isFocused ? theme.colors.white : theme.colors.bg_gray};
  cursor: text;
  color: ${({ theme }) => theme.colors.text_black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }

  &:focus {
    outline: none;
  }

  ${({ $hasValue }) =>
    $hasValue &&
    css`
      cursor: default;
    `}
`;
