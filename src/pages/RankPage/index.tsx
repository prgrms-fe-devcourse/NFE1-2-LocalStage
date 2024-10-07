import { useState, useMemo } from 'react';
import * as S from './styles';
import { SquareButtonContainer } from '@/components/SquareButtonContainer';
import { PItemContainer } from '@/components/PItemContainer';
import { PCard } from '@/components/PCard';
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
  const activePeriodIndex = stsPeriods.indexOf(activePeriod);

  const { data, isLoading } = useBoxOffice({
    ststype: activePeriod,
    date: yesterday,
    catecode: activeGenre,
  });

  const onGenreChange = (id: GenreCode) => setActiveGenre(id);
  const onPeriodChange = (index: number) => setActivePeriod(stsPeriods[index]);

  const formattedData = useMemo(() => {
    return (
      data?.boxofs?.boxof?.map(item => ({
        mt20id: item.mt20id,
        poster: 'http://www.kopis.or.kr/' + item.poster,
        prfnm: item.prfnm,
        prfplcnm: item.prfplcnm,
        prfpd: item.prfpd,
        rnum: item.rnum,
        area: item.area,
        cate: item.cate,
      })) ?? []
    );
  }, [data]);

  const topThreePerformances = formattedData.slice(0, 3);
  const otherPerformances = formattedData.slice(3, 50);

  return (
    <Panel title="장르별 공연">
      <S.RankPage>
        <S.ButtonContainer>
          <SquareButtonContainer<GenreCode>
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
        {isLoading ? (
          <S.LoaderContainer>
            <Loader />
          </S.LoaderContainer>
        ) : (
          <>
            <S.TopThreePerformances>
              {topThreePerformances.map(performance => (
                <PCard
                  key={performance.mt20id}
                  id={performance.mt20id}
                  posterUrl={performance.poster}
                  name={performance.prfnm}
                  facility={performance.prfplcnm}
                  period={performance.prfpd}
                  rank={performance.rnum}
                  width="356px"
                />
              ))}
            </S.TopThreePerformances>
            <PItemContainer data={otherPerformances} />
          </>
        )}
      </S.RankPage>
    </Panel>
  );
}
