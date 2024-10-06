import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface RoundedButtonProps {
  text: string;
  onClick?: () => void;
}

export const RoundedButton = ({ text, onClick }: RoundedButtonProps) => {
  return (
    <S.RoundedButton onClick={onClick}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faAngleRight} />
    </S.RoundedButton>
  );
};
