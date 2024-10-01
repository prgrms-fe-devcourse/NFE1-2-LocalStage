import { useEffect, useMemo } from 'react';
import * as S from './styles';
import ReactDOM from 'react-dom';
import { H16, P16 } from '@/components/Text';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface MapModalProps {
  place: string;
  phone: string;
  address: string;
  url: string;
  visible: boolean;
  width?: number;
  height?: number;
  latitude: number;
  longitude: number;
  onClose: () => void;
}

export const MapModal = ({
  place,
  phone,
  address,
  url,
  visible,
  width = 800,
  height = 600,
  latitude,
  longitude,
  onClose,
}: MapModalProps) => {
  const containerStyle = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

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
      <S.ModalContainer style={containerStyle}>
        <S.ModalHeader>
          <H16>공연장 정보</H16>
          <S.ModalCloseBtn onClick={onClose}>X</S.ModalCloseBtn>
        </S.ModalHeader>

        <S.ModalPlaceInfo>
          <H16>{place}</H16>
          <P16>전화번호 : {phone}</P16>
          <P16>주소 : {address}</P16>
          <P16>홈페이지 : {url}</P16>
          <Map center={{ lat: latitude, lng: longitude }} style={{ width: '100%', height: '100%' }}>
            <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
          </Map>
        </S.ModalPlaceInfo>
      </S.ModalContainer>
    </S.MapModal>,
    el,
  );
};
