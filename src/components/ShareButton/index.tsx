import * as S from './styles';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

interface ShareButtonProps {
  url: string;
}

export const ShareButton = ({ url }: ShareButtonProps) => {
  const onClick = () => {
    navigator.clipboard.writeText(url).catch(error => {
      console.error('Error copying link:', error);
    });
  };

  return <S.ShareButton icon={faShareNodes} onClick={onClick} />;
};
