import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';

interface NextButtonProps {
  onClickNextButton: () => void;
  disabled: boolean;
}

export const NextButton = ({ onClickNextButton, disabled }: NextButtonProps) => {
  const onClick = () => onClickNextButton();

  return (
    <S.Button onClick={onClick} disabled={disabled}>
      <S.ButtonText>Next</S.ButtonText>
      <FontAwesomeIcon icon={faChevronRight} />
    </S.Button>
  );
};