import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
// import { CommonResponseType } from '@/types/apis';
import { PCard } from '@/components/PCard';
import { PItemType } from '@/types/pItem';

interface PCardSliderProps {
  pList: PItemType[];
  width?: string;
  gap?: string;
}

export const PCardSlider = ({ pList, width = '100%', gap = '5px' }: PCardSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <S.PCardSlider width={width} gap={gap}>
      <Slider {...settings}>
        {pList.map((perform, index) => {
          return <PCard key={index} {...perform} width="100%" />;
        })}
      </Slider>
    </S.PCardSlider>
  );
};
