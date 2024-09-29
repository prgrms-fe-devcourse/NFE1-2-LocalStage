import styled from 'styled-components';

interface StyledPDetailReviewInputProps {
  $isFocused: boolean;
  $hasValue: boolean;
  $disabled: boolean;
}

export const PDetailReviewInput = styled.textarea<StyledPDetailReviewInputProps>`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;
  background-color: ${({ theme, $isFocused, $hasValue, $disabled }) =>
    $hasValue || $isFocused || $disabled ? theme.colors.white : theme.colors.bg_gray};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'text')};
  color: ${({ theme }) => theme.colors.text_black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }

  &:focus {
    outline: none;
  }
`;
