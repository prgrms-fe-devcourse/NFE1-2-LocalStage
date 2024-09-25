import styled from 'styled-components';
import * as T from '../Text';

export const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Item = styled(T.P16)<{ active: boolean }>`
  cursor: pointer;
  padding: 10px 15px;
  color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.text_gray)};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(${props => (props.active ? 1 : 0)});
    transition: transform 0.3s ease-in-out;
  }
`;
