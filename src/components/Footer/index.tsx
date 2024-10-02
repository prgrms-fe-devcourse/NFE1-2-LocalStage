import React from 'react';
import * as S from './styles';
import interparkLogo from '@/assets/imgs/interpark-logo.png';
import kopisLogo from '@/assets/imgs/kopis-logo.png';
import yes24Logo from '@/assets/imgs/yes24-logo.png';

const logoList = [
  { href: 'https://www.interpark.com', alt: 'interpark', src: interparkLogo },
  { href: 'https://www.kopis.or.kr', alt: 'KOPIS', src: kopisLogo },
  { href: 'https://www.yes24.com', alt: 'YES24', src: yes24Logo },
];

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.StyledFooter>
        {logoList.map((logo, index) => (
          <React.Fragment key={logo.alt}>
            <a href={logo.href} target="_blank" rel="noopener noreferrer">
              <S.Logo src={logo.src} alt={logo.alt} />
            </a>
            {index < logoList.length - 1 && <S.StyledSeperator />}
          </React.Fragment>
        ))}
      </S.StyledFooter>
    </S.FooterContainer>
  );
};
