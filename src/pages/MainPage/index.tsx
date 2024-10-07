import usePList from '@/hooks/usePList';
import useBoxOffice from '@/hooks/useBoxOffice';
import useYoutube from '@/hooks/useYouTube';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VItemType } from '@/types/vItem';
import getFormattedDates from '@/utils/getFormattedDates';
import { genreMap } from '@/constants/genreMap';
import { Loader } from '@/components/Loader';
import { SquareButtonContainer } from '@/components/SquareButtonContainer';
import { PCardSlider } from '@/components/PCardSlider';
import { PosterGallery } from '@/components/PosterGallery';
import { Banner } from '@/components/Banner';
import bannerImage from '@/assets/imgs/banner.png';
import { PCardGrid } from '@/components/PCardGrid';
import { H32 } from '@/components/Text';
import { PTrailerSlider } from '@/components/PTrailerSlider';
import { RoundedButton } from '@/components/RoundedButton';
import * as S from './styles';
import FillterGenreRank from '@/utils/FillterGenreRank';

export default function MainPage() {
  const navigate = useNavigate();
  const genre = genreMap;
  const formedDate = getFormattedDates();
  const [selectGenre, setSelectedGenre] = useState<string>(genre.전체);

  const { data: genreRank, isLoading: genreLoading } = useBoxOffice({
    date: formedDate.today,
    ststype: 'month',
    area: 11,
    catecode: selectGenre,
  });
  const { data: BoxOffice } = useBoxOffice({ date: formedDate.today, ststype: 'month', area: 11 });
  const { data: pList } = usePList({
    cpage: 1,
    eddate: formedDate.oneMonthLater,
    rows: 10,
    stdate: formedDate.today,
  });
  const genreButtonList = Object.entries(genre).map(([key, value]) => ({
    id: value,
    text: key,
    onButtonClick: () => {
      setSelectedGenre(value);
    },
  }));
  const genreRankList = FillterGenreRank(genreRank?.boxofs?.boxof);
  const vList: VItemType[] = [];
  const { vItem: v1 } = useYoutube({
    id: pList?.dbs?.db[1].mt20id,
    name: pList?.dbs?.db[1].prfnm,
    poster: pList?.dbs?.db[1].poster,
  });
  const { vItem: v2 } = useYoutube({
    id: pList?.dbs?.db[2].mt20id,
    name: pList?.dbs?.db[2].prfnm,
    poster: pList?.dbs?.db[2].poster,
  });
  const { vItem: v3 } = useYoutube({
    id: pList?.dbs?.db[3].mt20id,
    name: pList?.dbs?.db[3].prfnm,
    poster: pList?.dbs?.db[3].poster,
  });
  if (v1 && v2 && v3) {
    vList.push(v1);
    vList.push(v2);
    vList.push(v3);
  }
  return (
    <S.MainPage>
      <S.GenreRank width="100%">
        <H32>장르별 랭킹</H32>
        <SquareButtonContainer buttonPropsList={genreButtonList} />
        {genreLoading ? (
          <Loader></Loader>
        ) : (
          <>
            <PCardSlider
              pList={
                genreRankList?.map(pItem => ({
                  id: pItem.mt20id,
                  posterUrl: 'https://www.kopis.or.kr/' + pItem.poster,
                  name: pItem.prfnm,
                  facility: pItem.prfplcnm,
                  period: pItem.prfpd,
                  rank: pItem.rnum,
                })) || []
              }
              width="90%"
            />
            <RoundedButton
              text="장르별 공연 전체 보기"
              onClick={() => {
                navigate('/rank');
              }}
            />
          </>
        )}
      </S.GenreRank>
      <S.PopularPerforms width="100%">
        <H32>인기 공연</H32>
        <PosterGallery
          pList={
            BoxOffice?.boxofs?.boxof.map(pItem => ({
              id: pItem.mt20id,
              posterUrl: 'https://www.kopis.or.kr/' + pItem.poster,
              name: pItem.prfnm,
              facility: pItem.prfplcnm,
              period: pItem.prfpd,
              rank: pItem.rnum,
            })) || []
          }
        />
      </S.PopularPerforms>
      <S.BannerContainer>
        <Banner src={bannerImage} />
      </S.BannerContainer>
      <S.PerformVideo width="100%">
        <H32>공연 영상</H32>
        <PTrailerSlider vList={vList} />
      </S.PerformVideo>
      <S.CommingSoon width="100%">
        <H32>개봉 예정 공연</H32>
        <PCardGrid
          pList={
            pList?.dbs?.db.map(pItem => ({
              id: pItem.mt20id,
              posterUrl: pItem.poster,
              name: pItem.prfnm,
              facility: pItem.fcltynm,
              period: pItem.prfpdfrom + '-' + pItem.prfpdto,
            })) || []
          }
          columns={5}
        />
      </S.CommingSoon>
    </S.MainPage>
  );
}
