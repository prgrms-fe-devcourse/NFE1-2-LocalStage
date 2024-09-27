import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeartButton = styled(FontAwesomeIcon)<{ $isClicked: boolean }>`
  color: ${({ theme, $isClicked }) => ($isClicked ? theme.colors.primary : theme.colors.gray)};
  cursor: pointer;
  transition: color 0.1s ease;
  font-size: 18px;
`;
