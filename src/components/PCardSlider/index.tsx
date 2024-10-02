import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
// import { CommonResponseType } from '@/types/apis';
import { PCard } from '@/components/PCard';
import { CommonResponseType } from '@/types/apis';

interface PCardSliderProps {
  pList: (Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm'> &
    Partial<Pick<CommonResponseType, 'fcltynm' | 'prfpdfrom' | 'prfpdto' | 'prfplcnm' | 'prfpd' | 'rnum'>>)[];
  width?: string;
}

export const PCardSlider = ({ pList, width = '100%' }: PCardSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  const widthType = width.match(/[^0-9]/g)?.join('');
  const PCardWidth = widthType === '%' ? '98%' : `calc(${width} / 5.2)`;
  return (
    <S.PCardSlider width={width}>
      <Slider {...settings}>
        {pList.map((perform, index) => {
          return <PCard key={index} pInfo={perform} width={PCardWidth} />;
        })}
      </Slider>
    </S.PCardSlider>
  );
};
