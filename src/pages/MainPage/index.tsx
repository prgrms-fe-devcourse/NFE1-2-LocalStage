import usePList from '@/hooks/usePList';
import useBoxOffice from '@/hooks/useBoxOffice';
import useYoutube from '@/hooks/useYouTube';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VItemType } from '@/types/vItem';
import getFormattedDates from '@/utils/getFormattedDates';
import ConvertToArray from '@/utils/ConvertToArray';
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
import { GenreCode } from '@/types/genreCodeName';
import Pagination from '@/components/Pagination';
import * as S from './styles';

export default function MainPage() {
  const navigate = useNavigate();
  const formedDate = getFormattedDates();

  // 장르별 인기 공연
  const [activeGenre, setActiveGenre] = useState<GenreCode>(genreMap.전체);
  const { data: genreRank, isLoading: genreRankLoading } = useBoxOffice({
    date: formedDate.today,
    ststype: 'month',
    area: 11,
    catecode: activeGenre,
  });
  const genreButtonList = Object.entries(genreMap).map(([name, code]) => ({
    id: code,
    text: name,
    onButtonClick: () => {
      setActiveGenre(code);
    },
  }));

  // 인기 공연
  const { data: BoxOffice, isLoading: boxOfficeLoading } = useBoxOffice({
    date: formedDate.today,
    ststype: 'month',
    area: 11,
  });

  // 개봉 예정 공연
  const [selectPage, setSelectPage] = useState(1);
  const itemsPerPage = 15;
  const { data: pList, isLoading: pListLoading } = usePList({
    cpage: selectPage,
    eddate: formedDate.oneMonthLater,
    rows: itemsPerPage,
    stdate: formedDate.today,
  });

  // 공연 영상
  const genreRankList = ConvertToArray(genreRank?.boxofs?.boxof, 10);
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
        <SquareButtonContainer<GenreCode>
          buttonPropsList={genreButtonList}
          activeButtonId={activeGenre}
          onActiveButtonChange={code => setActiveGenre(code)}
        />
        {genreRankLoading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
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
        {boxOfficeLoading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : (
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
            width="calc(100% - 1rem)"
          />
        )}
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
        {pListLoading ? (
          <S.Loader>
            <Loader />
          </S.Loader>
        ) : (
          <>
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
              width="calc(100% - 1rem)"
            />
            <Pagination
              selectedPage={selectPage}
              itemsPerPage={itemsPerPage}
              totalItemsCount={itemsPerPage * 10}
              onClickPagination={(pageNumber: number) => setSelectPage(pageNumber)}
            ></Pagination>
          </>
        )}
      </S.CommingSoon>
    </S.MainPage>
  );
}
