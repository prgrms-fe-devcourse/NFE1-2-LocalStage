import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeartButton = styled(FontAwesomeIcon)<{ $isFilled: boolean }>`
  color: ${({ theme, $isFilled }) => ($isFilled ? theme.colors.primary : theme.colors.gray)};
  cursor: pointer;
  transition: color 0.1s ease;
  font-size: 18px;
`;
