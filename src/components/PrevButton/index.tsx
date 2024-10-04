import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';

interface PrevButtonProps {
  onClickPrevButton: () => void;
  disabled: boolean;
}

export const PrevButton = ({ onClickPrevButton, disabled }: PrevButtonProps) => {
  const onClick = () => onClickPrevButton();

  return (
    <S.Button onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <S.ButtonText>Previous</S.ButtonText>
    </S.Button>
  );
};
