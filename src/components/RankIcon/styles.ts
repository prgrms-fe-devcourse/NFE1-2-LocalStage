import { H20 } from '@/components/Text';
import styled from 'styled-components';

export const RankIconWrapper = styled.div<{ color: string }>`
  position: relative;
  display: inline-block;
  color: ${({ color }) => color};
  font-size: 48px;
`;

export const RankNumber = styled(H20)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
`;
