import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

export const ShareButton = styled(FontAwesomeIcon)`
  font-size: 15px;
  transition:
    transform 0.2s,
    color 0.2s;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.colors.primary};
  }
`;
