import { useParams } from 'react-router-dom';
import * as S from './styles';
import usePDetail from '@/hooks/usePDetail';
import { DetailImageContainer } from '@/components/DetailImageContainer';
import { DetailInfoPanel } from '@/components/DetailInfoPanel';
import useYoutube from '@/hooks/useYouTube';
import { PTrailerVideo } from '@/components/PTrailerVideo';
import { Loader } from '@/components/Loader';
import { convertEmptyObject, convertToArray } from '@/utils/ConvertToArray';
import HeartStorage from '@/utils/HeartStorage';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = usePDetail({ mt20id: id });

  const videoList = useYoutube({
    id: data?.dbs?.db.mt20id ?? '',
    name: data?.dbs?.db.prfnm ?? '',
    poster: data?.dbs?.db.poster ?? '',
  });

  const onHeartClick = () => {
    HeartStorage.toggleHeart(id as string);
  };
  const onUpdateScore = () => {};

  if (isLoading) return <Loader />;
  return (
    <S.DetailPage>
      <DetailInfoPanel
        title={data?.dbs?.db.prfnm || ''}
        posterSrc={data?.dbs?.db.poster || ''}
        posterWidth="30%"
        onHeartClick={onHeartClick}
        onUpdateScore={onUpdateScore}
        name={data?.dbs?.db.prfnm || ''}
        category={data?.dbs?.db.genrenm || ''}
        place={data?.dbs?.db.fcltynm || ''}
        duration={data?.dbs?.db.prfpdfrom + '~' + data?.dbs?.db.prfpdto}
        time={convertEmptyObject(data?.dbs?.db.prfruntime)}
        spectator={data?.dbs?.db.prfage || ''}
        price={data?.dbs?.db.pcseguidance || ''}
        score={2}
        fId={data?.dbs?.db.mt10id || ''}
        initialIsHeartFilled={HeartStorage.isHearted(id as string)}
        pId={data?.dbs?.db.mt20id || ''}
      />
      <S.Panel>
        <S.Title>공연 예고편</S.Title>
        <PTrailerVideo vId={videoList.vItem?.vId ?? ''} />
      </S.Panel>
      <S.Panel>
        <S.Title>상세 이미지</S.Title>
        <DetailImageContainer detailImgUrlList={convertToArray(data?.dbs?.db.styurls.styurl)} />
      </S.Panel>
    </S.DetailPage>
  );
}
