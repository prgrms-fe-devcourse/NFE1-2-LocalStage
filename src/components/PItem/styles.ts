import { H16, H24, P14 } from '@/components/Text';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Rank = styled(H24)`
  width: 40px;
  text-align: center;
  margin-right: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
`;

export const Title = styled(H16)`
  flex: 2;
`;

export const Info = styled(P14)`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_gray};
`;
