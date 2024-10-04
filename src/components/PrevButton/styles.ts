import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

export const ButtonText = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
