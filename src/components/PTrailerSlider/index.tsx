import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
import { PTrailer } from '@/components/PTrailer';
import { VItemType } from '@/types/vItem';

interface PTrailerSliderProps {
  vList: VItemType[];
  width?: string;
}

export const PTrailerSlider = ({ vList, width = '100%' }: PTrailerSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  const widthType = width.match(/[^0-9]/g)?.join('');
  const pTrailerWidth = widthType === '%' ? '98%' : `calc(${width} / 5.2)`;
  return (
    <S.PTrailerSlider width={width}>
      <Slider {...settings}>
        {vList.map((video, index) => {
          return <PTrailer key={index} {...video} width={pTrailerWidth} />;
        })}
      </Slider>
    </S.PTrailerSlider>
  );
};
