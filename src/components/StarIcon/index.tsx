import * as S from './styles';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarIconProps {
  isChecked: boolean;
  onClick: () => void;
}

export const StarIcon = ({ isChecked, onClick }: StarIconProps) => {
  return <S.StarIcon onClick={onClick} icon={faStar} isChecked={isChecked} />;
};
