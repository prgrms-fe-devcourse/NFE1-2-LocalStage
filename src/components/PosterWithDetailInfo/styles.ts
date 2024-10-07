import { PosterWithButtons } from '@/components/PosterWithButtons';
import { styled } from 'styled-components';

export const PosterWithDetailInfo = styled.section<{ width: string }>`
  display: flex;
  margin: 30px auto;
  gap: 30px;
  width: ${({ width }) => width};
`;
export const StyledPosterWithButtons = styled(PosterWithButtons)`
  flex-grow: 1;
`;
export const PDetailContainer = styled.div`
  flex-grow: 1.5;
`;
