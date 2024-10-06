import { PosterWithDetailInfo } from '@/components/PosterWithDetailInfo';
import * as S from './styles';
import usePDetail from '@/hooks/usePDetail';
import useFacilityDetail from '@/hooks/useFacilityDetail';
import { Loader } from '@/components/Loader';

export default function MainPage() {
  const { data: pDetailInfo } = usePDetail({ mt20id: 'PF132236' });
  const { data: facilityDetailInfo } = useFacilityDetail({ mt10id: pDetailInfo?.dbs?.db.mt10id });

  console.log(facilityDetailInfo);
  if (!pDetailInfo?.dbs || !facilityDetailInfo?.dbs?.db) return <Loader />;

  const {
    dbs: {
      db: { prfnm, prfpdfrom, prfpdto, fcltynm, prfruntime, prfage, pcseguidanc, poster, genrenm },
    },
  } = pDetailInfo;
  const {
    dbs: {
      db: { telno, relateurl, adres, la, lo },
    },
  } = facilityDetailInfo;

  return (
    <S.MainPage>
      <PosterWithDetailInfo
        posterSrc={poster}
        name={prfnm}
        category={genrenm}
        place={fcltynm}
        duration={prfpdfrom + '~' + prfpdto}
        time={prfruntime}
        spectator={prfage}
        price={pcseguidanc}
        score={1}
        placeInfo={{
          phone: telno,
          address: adres,
          shareUrl: relateurl,
          latitude: la,
          longitude: lo,
        }}
      />
    </S.MainPage>
  );
}
