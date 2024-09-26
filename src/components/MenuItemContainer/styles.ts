import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const VerticalBar = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const MenuItem = styled.div`
  position: relative;
  justify-content: flex-start;
`;
