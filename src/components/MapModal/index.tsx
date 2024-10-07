import { useEffect, useMemo } from 'react';
import * as S from './styles';
import ReactDOM from 'react-dom';
import { H16, P16 } from '@/components/Text';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useFacilityDetail from '@/hooks/useFacilityDetail';
import { Loader } from '@/components/Loader';

interface MapModalProps {
  place: string;
  visible: boolean;
  width?: number;
  height?: number;
  onClose: () => void;
  id: string;
}

export const MapModal = ({ place, visible, onClose, id }: MapModalProps) => {
  const { data, isLoading } = useFacilityDetail({ mt10id: id });
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <S.MapModal>
      <S.ModalContainer>
        <S.ModalHeader>
          <H16>공연장 정보</H16>
          <S.ModalCloseBtn onClick={onClose}>X</S.ModalCloseBtn>
        </S.ModalHeader>
        {isLoading ? (
          <Loader />
        ) : (
          <S.ModalPlaceInfo>
            <H16>{place}</H16>
            <P16>전화번호 : {data?.dbs?.db.telno}</P16>
            <P16>주소 : {data?.dbs?.db.adres}</P16>
            {/* <P16>홈페이지 : {data?.dbs?.db.relateurl || ''}</P16> */}
            <Map
              center={{ lat: data?.dbs?.db.la || 37, lng: data?.dbs?.db.lo || 127 }}
              style={{ width: '100%', height: '100%' }}
            >
              <MapMarker position={{ lat: data?.dbs?.db.la || 37, lng: data?.dbs?.db.lo || 127 }}></MapMarker>
            </Map>
          </S.ModalPlaceInfo>
        )}
      </S.ModalContainer>
    </S.MapModal>,
    el,
  );
};
