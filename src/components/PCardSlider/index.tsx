import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
import { PCard } from '@/components/PCard';
import { PItemType } from '@/types/pItem';
import { useEffect, useRef } from 'react';

interface PCardSliderProps {
  pList: PItemType[];
  width?: string;
  gap?: string;
}

export const PCardSlider = ({ pList, width = '100%', gap = '5px' }: PCardSliderProps) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [pList]);

  return (
    <S.PCardSlider width={width} gap={gap}>
      <Slider ref={sliderRef} {...settings}>
        {pList.map((perform, index) => {
          return <PCard key={index} {...perform} width="100%" />;
        })}
      </Slider>
    </S.PCardSlider>
  );
};
