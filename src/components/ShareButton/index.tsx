import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

interface ShareButtonProps {
  url: string;
}

export const ShareButton = ({ url }: ShareButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url).catch(error => {
      console.error('Error copying link:', error);
    });
  };

  return (
    <S.ShareButton onClick={handleCopy}>
      <FontAwesomeIcon icon={faShareNodes} />
    </S.ShareButton>
  );
};
