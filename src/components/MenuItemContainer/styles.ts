import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
