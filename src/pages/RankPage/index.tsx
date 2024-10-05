import { useState, useMemo } from 'react';
import * as S from './styles';
import { SquareButtonContainer } from '@/components/SquareButtonContainer';
import { PItemContainer } from '@/components/PItemContainer';
import useBoxOffice from '@/hooks/useBoxOffice';
import { Loader } from '@/components/Loader';
import { genreMap } from '@/constants/genreMap';
import { Panel } from '@/components/Panel';
import { FilterButtonContainer } from '@/components/FilterButtonContainer';
import { LocalDateTime } from '@/components/LocalDateTime';
import { GenreCode, GenreName } from '@/types/genreCodeName';
import getFormattedDates from '@/utils/getFormattedDates';

const genreEntries = Object.entries(genreMap) as [GenreName, GenreCode][];

const timePeriods = ['일간', '주간', '월간'];
const stsPeriods: ('day' | 'week' | 'month')[] = ['day', 'week', 'month'];

export default function RankPage() {
  const [activeGenre, setActiveGenre] = useState<GenreCode>(genreMap.전체);
  const [activePeriod, setActivePeriod] = useState<'day' | 'week' | 'month'>('day');

  const { yesterday } = getFormattedDates();

  const { data, isLoading } = useBoxOffice({
    ststype: activePeriod,
    date: yesterday,
    catecode: activeGenre,
  });

  const onGenreChange = (id: GenreCode) => {
    setActiveGenre(id);
  };

  const onPeriodChange = (index: number) => {
    setActivePeriod(stsPeriods[index]);
  };

  const activePeriodIndex = stsPeriods.indexOf(activePeriod);

  const formattedData = useMemo(() => {
    return (
      data?.boxofs?.boxof?.map(item => ({
        area: item.area,
        prfplcnm: item.prfplcnm,
        prfpd: item.prfpd,
        cate: item.cate,
        prfnm: item.prfnm,
        rnum: item.rnum,
        poster: 'http://www.kopis.or.kr/' + item.poster,
        mt20id: item.mt20id,
      })) ?? []
    );
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Panel title="장르별 공연">
      <S.RankPage>
        <S.ButtonContainer>
          <SquareButtonContainer
            buttonPropsList={genreEntries.map(([name, code]) => ({
              id: code,
              text: name,
              onButtonClick: () => onGenreChange(code),
            }))}
            activeButtonId={activeGenre}
            onActiveButtonChange={onGenreChange}
          />
        </S.ButtonContainer>
        <S.DateSection>
          <LocalDateTime />
          <FilterButtonContainer
            buttonList={timePeriods}
            activeIndex={activePeriodIndex}
            onFilterChange={onPeriodChange}
          />
        </S.DateSection>
        <PItemContainer data={formattedData} />
      </S.RankPage>
    </Panel>
  );
}
