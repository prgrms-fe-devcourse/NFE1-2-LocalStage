import styled from 'styled-components';

export const PDetailReviewInput = styled.textarea<{ $isSubmitted?: boolean }>`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;
  background-color: ${({ theme, $isSubmitted }) => ($isSubmitted ? theme.colors.white : theme.colors.gray)};
  transition: background-color 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
