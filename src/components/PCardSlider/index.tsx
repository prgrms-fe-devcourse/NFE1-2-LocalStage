import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
import { CommonResponseType } from '@/types/apis';
import { PCard } from '@/components/PCard';

interface PCardSliderProps {
  pList: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto'>[];
  width?: string;
  isRanked?: boolean;
}

export const PCardSlider = ({ pList, width = '600px', isRanked = false }: PCardSliderProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <S.PCardSlider width={width}>
      <Slider {...settings}>
        {pList.map((perform, index) => {
          return (
            <PCard
              key={index}
              pInfo={perform}
              width={`calc(${width} / 5.2)`}
              {...(isRanked && { rank: index + 1 })}
            ></PCard>
          );
        })}
      </Slider>
    </S.PCardSlider>
  );
};
