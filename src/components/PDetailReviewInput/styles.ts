import { styled } from 'styled-components';

export const PDetailReviewInput = styled.div`
  width: 400px;
  height: 100px;
  padding: 10px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey};
  border-radius: 10px;
`;

export const PDetailReviewTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  background-color: transparent;
  resize: none;
  cursor: text;

  &:disabled {
    background-color: #f5f5f5;
  }
  &::placeholder {
    color: ${props => props.theme.colors.text_gray};
  }
  &:focus {
    outline: none;
  }
`;
