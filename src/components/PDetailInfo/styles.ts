import styled from 'styled-components';
import { P16, H16 } from '@/components/Text';

export const PDetailInfo = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
`;
export const PlaceValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Title = styled(H16)``;

export const Value = styled(P16)``;

export const ModalButton = styled.button`
  background: none;
  border: none;
  padding: 0;
`;
