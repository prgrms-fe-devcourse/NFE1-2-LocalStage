import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styles';
import { CommonResponseType } from '@/types/apis';
import { PCard } from '@/components/PCard';

interface PCardSliderProps {
  /**
   * Omit<PListResponseType, 'genrenm' | 'prfstate' | 'openrun' | 'area'>[] 과 동일
   */
  pList: Pick<CommonResponseType, 'mt20id' | 'poster' | 'prfnm' | 'fcltynm' | 'prfpdfrom' | 'prfpdto'>[];
  width?: string;
  isRanked?: boolean;
}

export const PCardSlider = ({ pList, width = '100%', isRanked }: PCardSliderProps) => {
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
          return <PCard key={index} pInfo={perform} width={PCardWidth} {...(isRanked && { rank: index + 1 })} />;
        })}
      </Slider>
    </S.PCardSlider>
  );
};
