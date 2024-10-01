import styled from 'styled-components';

export const PDetailReviewInput = styled.textarea<{ $isSubmitted?: boolean }>`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;
  transition: background-color 0.3s ease;
  background-color: ${({ theme, $isSubmitted }) => ($isSubmitted ? theme.colors.white : theme.colors.gray)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &:not(:placeholder-shown) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
