import styled from 'styled-components';

export const PDetailReviewInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;
  transition: background-color 0.3s ease;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }

  &:placeholder-shown {
    background-color: ${({ theme }) => theme.colors.gray};
    &:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
