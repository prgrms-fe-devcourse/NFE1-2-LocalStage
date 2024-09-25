import { P16 } from '@/components/Text';
import { styled } from 'styled-components';

export const ShareButton = styled(P16)`
  &:hover {
    svg {
      transform: scale(1.2);
      color: ${props => props.theme.colors.primary};
    }
  }
`;
