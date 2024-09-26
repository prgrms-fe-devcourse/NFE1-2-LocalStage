import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarIconProps {
  isChecked: boolean;
}

export const StarIcon = ({ isChecked }: StarIconProps) => {
  return <S.StarIcon icon={faStar} isChecked={isChecked} />;
};
