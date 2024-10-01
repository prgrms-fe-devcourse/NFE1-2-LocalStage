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

export const Poster = styled.img`
  width: 90px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(H16)`
  margin: 0;
  flex: 2;
`;

export const Info = styled(P14)`
  margin: 0;
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_gray};
`;
