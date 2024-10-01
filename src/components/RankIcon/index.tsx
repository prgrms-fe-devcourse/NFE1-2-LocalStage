import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

interface RankIconProps {
  rank: 1 | 2 | 3;
}

const RankIcon = ({ rank }: RankIconProps) => {
  const theme = useTheme();
  const color = S.getRankColor(rank, theme);

  return (
    <S.RankIconWrapper color={color}>
      <FontAwesomeIcon icon={faBookmark} />
      <S.RankNumber>{rank}</S.RankNumber>
    </S.RankIconWrapper>
  );
};

export default RankIcon;
