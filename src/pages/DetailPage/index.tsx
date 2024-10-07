import { useParams } from 'react-router-dom';
import * as S from './styles';
import usePDetail from '@/hooks/usePDetail';
import { DetailImageContainer } from '@/components/DetailImageContainer';
import { DetailInfoPanel } from '@/components/DetailInfoPanel';
import useFacilityDetail from '@/hooks/useFacilityDetail';
import { PlaceInfoType } from '@/types/placeInfo';
import { PDetailType } from '@/types/pDetail';
import useYoutube from '@/hooks/useYouTube';
import { PTrailerVideo } from '@/components/PTrailerVideo';
import { useEffect, useState } from 'react';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const defaultPlaceInfo: PlaceInfoType = {
    phone: '',
    address: '',
    shareUrl: '',
    latitude: 0,
    longitude: 0,
  };

  const defaultPDetailValue: PDetailType = {
    name: '',
    category: '',
    place: '',
    duration: '',
    time: '',
    spectator: '',
    price: '',
    score: 0,
    placeInfo: defaultPlaceInfo,
  };

  const [pDetailValue, setPDetailValue] = useState<PDetailType>(defaultPDetailValue);
  const [placeInfo, setPlaceInfo] = useState<PlaceInfoType>(defaultPlaceInfo);

  const { data: performanceData, isLoading: isPerformanceLoading } = usePDetail({ mt20id: id });
  const { data: facilityData, isLoading: isFacilityLoading } = useFacilityDetail({
    mt10id: performanceData?.dbs?.db.mt10id,
  });

  const performanceDb = performanceData?.dbs?.db;
  const facilityDb = facilityData?.dbs?.db;

  useEffect(() => {
    if (performanceData && facilityData) {
      setPlaceInfo({
        phone: facilityDb?.telno ?? '',
        address: facilityDb?.adres ?? '',
        shareUrl: facilityDb?.relateurl.length == 0 ? facilityDb?.relateurl[0] : '주소 정보 없음',
        latitude: facilityDb?.la ?? 0,
        longitude: facilityDb?.lo ?? 0,
      });

      setPDetailValue({
        name: performanceDb?.prfnm as string,
        category: performanceDb?.genrenm as string,
        place: performanceDb?.fcltynm as string,
        duration: `${performanceDb?.prfpdfrom as string}~${performanceDb?.prfpdto as string}`,
        time: performanceDb?.prfruntime as string,
        spectator: performanceDb?.prfage as string,
        price: performanceDb?.pcseguidance as string,
        score: 1, // 임시값 LocalStorage에서 불러와야함
        placeInfo: placeInfo as PlaceInfoType,
      });
    }
  }, [performanceData, facilityData]);

  const videoList = useYoutube({
    id: performanceDb?.mt20id ?? '',
    name: performanceDb?.prfnm ?? '',
    poster: performanceDb?.poster ?? '',
  });

  const onHeartClick = () => {};

  const onUpdateScore = () => {};

  return (
    <S.DetailPage>
      <DetailInfoPanel
        title={pDetailValue?.name as string}
        posterSrc={performanceData?.dbs?.db.poster as string}
        initialIsHeartFilled={false}
        posterWidth="30%"
        isNameInclude={false}
        onHeartClick={onHeartClick}
        onUpdateScore={onUpdateScore}
        {...pDetailValue}
      />
      <S.Panel>
        <S.Title>공연 예고편</S.Title>
        <PTrailerVideo vId={videoList.vItem?.vId ?? ''} />
      </S.Panel>
      <S.Panel>
        <S.Title>상세 이미지</S.Title>
        <DetailImageContainer detailImgList={performanceDb?.styurls.styurl.map(styurl => ({ src: styurl })) || []} />
      </S.Panel>
    </S.DetailPage>
  );
}
