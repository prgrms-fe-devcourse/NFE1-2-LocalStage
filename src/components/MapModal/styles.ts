import { styled } from 'styled-components';
import theme from '@/styles/theme';

export const MapModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 40%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 500px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    border: 1px solid ${props => props.theme.colors.gray};
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
  }
`;

export const ModalCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  &:hover {
    color: ${props => props.theme.colors.gray};
  }
`;

export const ModalPlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 10px;
  flex-grow: 1;
  overflow-y: auto;
`;
