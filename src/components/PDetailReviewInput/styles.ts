import styled from 'styled-components';

export const PDetailReviewInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  resize: none;

  color: ${({ theme }) => theme.colors.text_black};
  background-color: ${({ theme }) => theme.colors.gray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_gray};
  }
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
