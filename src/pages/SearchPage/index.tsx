import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import usePList from '@/hooks/usePList';
import { PItemContainer } from '@/components/PItemContainer';
import { Loader } from '@/components/Loader';
import { NoResultIcon } from '@/components/NoResultIcon';
import getFormattedDates from '@/utils/getFormattedDates';
import { MenuItemContainer } from '@/components/MenuItemContainer';
import { SquareButtonContainer } from '@/components/SquareButtonContainer';
import { genreMap } from '@/constants/genreMap';
import { areaMap } from '@/constants/areaMap';
import { GenreCode, GenreName } from '@/types/genreCodeName';
import { AreaCode, AreaName } from '@/types/areaCodeName';
import { ConvertPartialDbToArray } from '@/utils/ConvertPartialDbToArray';
import { ApiResponseItem } from '@/types/apiResponseItem';

type ActiveButtonType = GenreCode | AreaCode | string;

const genreEntries = Object.entries(genreMap) as [GenreName, GenreCode][];
const areaEntries = Object.entries(areaMap) as [AreaName, AreaCode][];

export default function SearchPage() {
  const [activeMenu, setActiveMenu] = useState<'genre' | 'area'>('genre');
  const [activeButton, setActiveButton] = useState<ActiveButtonType>(genreMap.전체);
  const { query } = useParams<{ query: string }>();
  const { yesterday, oneMonthLater } = getFormattedDates();
  const menuItemList = ['장르별 공연', '지역별 공연'];

  const { data, isLoading } = usePList({
    stdate: yesterday,
    eddate: oneMonthLater,
    cpage: 1,
    rows: 100,
    shprfnm: query,
  });

  const onMenuChange = (index: number) => {
    const newActiveMenu = index === 0 ? 'genre' : 'area';
    setActiveMenu(newActiveMenu);
    setActiveButton(newActiveMenu === 'genre' ? genreMap.전체 : areaMap.전체);
  };

  const onButtonChange = (id: ActiveButtonType) => setActiveButton(id);

  const formattedData = useMemo(() => {
    const dbData = ConvertPartialDbToArray(data?.dbs?.db) as ApiResponseItem[];
    return dbData
      .map((item, index) => ({
        ...item,
        prfplcnm: item.fcltynm,
        prfpd: `${item.prfpdfrom} ~ ${item.prfpdto}`,
        cate: item.genrenm,
        rnum: index + 1,
      }))
      .filter(item => {
        const isAllButtonSelected = activeButton === (activeMenu === 'genre' ? genreMap.전체 : areaMap.전체);
        if (isAllButtonSelected) return true;

        if (activeMenu === 'genre') {
          return item.genrenm === Object.keys(genreMap).find(key => genreMap[key as GenreName] === activeButton);
        } else {
          return item.area === activeButton;
        }
      });
  }, [data, activeMenu, activeButton]);

  const currentButtons = useMemo(() => {
    return activeMenu === 'genre' ? genreEntries : areaEntries;
  }, [activeMenu]);

  return (
    <S.SearchPage>
      <S.SelectorContainer>
        <MenuItemContainer menuItemList={menuItemList} onMenuItemChange={onMenuChange} />
        <S.ButtonContainer>
          <SquareButtonContainer
            buttonPropsList={currentButtons.map(([name, code]) => ({
              id: code,
              text: name,
              onButtonClick: () => onButtonChange(code),
            }))}
            activeButtonId={activeButton}
            onActiveButtonChange={onButtonChange}
          />
        </S.ButtonContainer>
      </S.SelectorContainer>
      {isLoading ? (
        <S.LoaderContainer>
          <Loader />
        </S.LoaderContainer>
      ) : formattedData.length > 0 ? (
        <S.ResultContainer>
          <PItemContainer data={formattedData} />
        </S.ResultContainer>
      ) : (
        <S.NoResultIconContainer>
          <NoResultIcon />
        </S.NoResultIconContainer>
      )}
    </S.SearchPage>
  );
}
