/* eslint-disable no-unsafe-optional-chaining */
import usePList from '@/hooks/usePList';
import getFormattedDates from '@/utils/getFormattedDates';
import useBoxOffice from '@/hooks/useBoxOffice';
import { genreMap } from '@/constants/genreMap';
import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { SquareButtonContainer } from '@/components/SquareButtonContainer';
import { PCardSlider } from '@/components/PCardSlider';
import { PosterGallery } from '@/components/PosterGallery';
import { Banner } from '@/components/Banner';
import bannerImage from '@/assets/imgs/banner.png';
import { PCardGrid } from '@/components/PCardGrid';
import * as S from './styles';
import { H32 } from '@/components/Text';
import { PTrailerSlider } from '@/components/PTrailerSlider';
import { RoundedButton } from '@/components/RoundedButton';
import { useNavigate } from 'react-router-dom';
import useYoutube from '@/hooks/useYouTube';
import { VItemType } from '@/types/vItem';

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
  const FillterGenreRank = () => {
    if (!genreRank?.boxofs?.boxof) return [];
    let copy;
    if (Array.isArray(genreRank?.boxofs?.boxof)) {
      copy = [...genreRank.boxofs.boxof].slice(0, 10);
    } else {
      copy = [genreRank.boxofs.boxof];
    }
    return copy;
  };
  const genreRankList = FillterGenreRank();
  const { video } = useYoutube({ name: pList?.dbs?.db[0].prfnm, poster: pList?.dbs?.db[0].poster });
  const { video: v1 } = useYoutube({ name: pList?.dbs?.db[1].prfnm, poster: pList?.dbs?.db[1].poster });
  const { video: v2 } = useYoutube({ name: pList?.dbs?.db[2].prfnm, poster: pList?.dbs?.db[2].poster });
  const vList: VItemType[] = [];
  if (video && v1 && v2) {
    vList.push(video);
    vList.push(v1);
    vList.push(v2);
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
        <Banner src={bannerImage}></Banner>
      </S.BannerContainer>
      <S.PerformVideo width="100%">
        <H32>공연 영상</H32>
        <PTrailerSlider vList={vList} />
      </S.PerformVideo>
      <S.CommingSoon width="100%">
        <H32>개봉 예정 공연</H32>
        <PCardGrid
          pList={
            pList?.dbs?.db.slice(0, 10).map(pItem => ({
              id: pItem.mt20id,
              posterUrl: pItem.poster,
              name: pItem.prfnm,
              facility: pItem.fcltynm,
              period: pItem.prfpdfrom + '-' + pItem.prfpdto,
            })) || []
          }
          columns={5}
        ></PCardGrid>
      </S.CommingSoon>
    </S.MainPage>
  );
}
