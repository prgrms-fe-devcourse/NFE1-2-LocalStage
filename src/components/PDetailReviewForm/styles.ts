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

export const ButtonContainer = styled.div`
  grid-column: 2;
  justify-self: end;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
