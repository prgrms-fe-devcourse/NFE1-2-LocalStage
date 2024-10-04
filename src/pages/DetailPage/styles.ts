import { H24 } from '@/components/Text';
import { styled } from 'styled-components';

export const DetailPage = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.max_width};
`;

export const Title = styled(H24)`
  margin-bottom: 20px;
`;

export const Panel = styled.div`
  margin-bottom: 100px;
`;
