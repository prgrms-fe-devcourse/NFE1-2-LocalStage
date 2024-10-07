import { PosterWithDetailInfo } from '@/components/PosterWithDetailInfo';
import * as S from './styles';
import { PDetailRequestType, PDetailResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';
import { useEffect, useState } from 'react';
import replaceTextProperties from '@/utils/extractInnermostValues';
import HeartStorage from '@/utils/HeartStorage';
import { xml2json } from 'xml-js';
import { Loader } from '@/components/Loader';

export default function MyPage() {
  const heartList = HeartStorage.getHeartList().concat();
  const fetchHeartList = heartList.map(heartItem => fetch(getApiUrl<PDetailRequestType>(`pblprfr/${heartItem.id}`)));
  const [data, setData] = useState<PDetailResponseType[]>([]);

  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heartResponses = await Promise.all([
          ...fetchHeartList.map(fetchPromise => fetchPromise.then(response => response.clone().text())),
        ]);

        const parsedHeartData = await Promise.all(
          heartResponses.map(xmlText => {
            const jsonData = JSON.parse(xml2json(xmlText, { compact: true, spaces: 2 }));
            return replaceTextProperties<PDetailResponseType>(jsonData);
          }),
        );
        setData(parsedHeartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isDataLoading)
    return (
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    );

  return (
    <S.MyPage>
      {data.map(d => (
        <PosterWithDetailInfo
          isNameInclude
          key={d.dbs?.db.mt20id}
          id={d.dbs?.db.mt20id || ''}
          posterSrc={d.dbs?.db.poster || ''}
          name={d.dbs?.db.prfnm || ''}
          category={d.dbs?.db.genrenm || ''}
          place={d.dbs?.db.fcltynm || ''}
          duration={d.dbs?.db.prfpdfrom + '~' + d.dbs?.db.prfpdto}
          time={d.dbs?.db.prfruntime || ''}
          spectator={d.dbs?.db.prfage || ''}
          price={d.dbs?.db.pcseguidance || ''}
          // 평점 -> review?
          score={0}
        />
      ))}
    </S.MyPage>
  );
}
