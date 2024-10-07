import theme from '@/styles/theme';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StarIcon = styled(FontAwesomeIcon)<{ $isChecked: boolean }>`
  font-size: 15px;
  color: ${({ $isChecked: isChecked }) => (isChecked ? theme.colors.yellow : theme.colors.gray)};
  cursor: pointer;
`;
