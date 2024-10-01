import { useEffect, useMemo, useRef } from 'react';
import * as S from './styles';
import ReactDOM from 'react-dom';
import { H16, P16 } from '@/components/Text';
const KAKAO_MAP_API_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

declare global {
  interface Window {
    kakao: any;
  }
}

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
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);
  useEffect(() => {
    if (visible && mapRef.current) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new window.kakao.maps.Map(mapRef.current, options);

          const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      };

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [visible, latitude, longitude]);

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
          <S.MapContainer ref={mapRef}></S.MapContainer>
        </S.ModalPlaceInfo>
      </S.ModalContainer>
    </S.MapModal>,
    el,
  );
};
