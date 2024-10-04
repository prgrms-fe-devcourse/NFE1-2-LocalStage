import { useParams } from 'react-router-dom';
import * as S from './styles';
import usePDetail from '@/hooks/usePDetail';
import { DetailImageContainer } from '@/components/DetailImageContainer';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = usePDetail({ mt20id: id });

  return (
    <S.DetailPage>
      DetailPage {id}
      {/* DetailInfoPanel 넣기 */}
      <S.Panel>
        <S.Title>공연 예고편</S.Title>
        {/* Trailer 넣기 */}
      </S.Panel>
      <S.Panel>
        <S.Title>상세 이미지</S.Title>
        <DetailImageContainer detailImgList={data?.dbs?.db.styurls.styurl.map(styurl => ({ src: styurl })) || []} />
      </S.Panel>
    </S.DetailPage>
  );
}
