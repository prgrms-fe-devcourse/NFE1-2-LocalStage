import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
import { PTrailer } from '@/components/PTrailer';
import { VItemType } from '@/types/vItem';

interface PTrailerSliderProps {
  vList: VItemType[];
  width?: string;
  gap?: string;
}

export const PTrailerSlider = ({ vList, width = '100%', gap = '5px' }: PTrailerSliderProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <S.PTrailerSlider width={width} gap={gap}>
      <Slider {...settings}>
        {vList.map((video, index) => {
          return <PTrailer key={index} {...video} width="100%" />;
        })}
      </Slider>
    </S.PTrailerSlider>
  );
};
