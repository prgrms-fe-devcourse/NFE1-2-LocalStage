import * as S from './styles';
import yes24Logo from '../../assets/imgs/yes24-logo.png';
import interparkLogo from '../../assets/imgs/interpark-logo.png';
import kopisLogo from '../../assets/imgs/kopis-logo.png';

export const Footer = () => {
  return (
    <S.FooterContainer>
      <a href="https://www.interpark.com" target="_blank" rel="noopener noreferrer">
        <S.Logo src={interparkLogo} alt="Interpark" />
      </a>
      <a href="https://www.kopis.or.kr" target="_blank" rel="noopener noreferrer">
        <S.Logo src={kopisLogo} alt="KOPIS" />
      </a>
      <a href="https://www.yes24.com" target="_blank" rel="noopener noreferrer">
        <S.Logo src={yes24Logo} alt="Yes24" />
      </a>
    </S.FooterContainer>
  );
};
