import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 15px 35px;
  width: 100%;
  max-width: 500px;
`;

export const Label = styled.label`
  align-self: start;
  margin-top: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  justify-self: end;
  grid-column: 2;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
  }
`;
