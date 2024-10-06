import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface RoundedButtonProps {
  text: string;
}

export const RoundedButton = ({ text }: RoundedButtonProps) => {
  return (
    <S.RoundedButton>
      <span>{text}</span>
      <FontAwesomeIcon icon={faAngleRight} />
    </S.RoundedButton>
  );
};
