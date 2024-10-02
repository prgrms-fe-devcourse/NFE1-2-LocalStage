import { H32 } from '@/components/Text';
import styled from 'styled-components';

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const NoResultIcon = styled.img`
  width: 200px;
  height: 200px;
`;

export const NoResultText = styled(H32)`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;
