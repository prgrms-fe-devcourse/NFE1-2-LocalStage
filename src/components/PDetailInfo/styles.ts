import styled from 'styled-components';
import { P16, H16 } from '@/components/Text';

export const PDetailInfo = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

export const InfoRow = styled.div`
  display: contents;
`;

export const Title = styled(H16)`
  text-align: left;
`;

export const Value = styled(P16)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
`;
