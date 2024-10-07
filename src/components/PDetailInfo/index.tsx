import * as S from './styles';
import { useState } from 'react';
import { MapModal } from '@/components/MapModal';
import { StarIconContainer } from '@/components/StarIconContainer';
import { PDetailType } from '@/types/pDetail';

interface PDetailInfoProps extends PDetailType {
  width?: string;
  height?: string;
  isNameInclude?: boolean;
  onUpdateScore?: (newScore: number) => void;
}

export const PDetailInfo = ({
  name,
  category,
  place,
  duration,
  time,
  spectator,
  price,
  score,
  width = '400px',
  height = '250px',
  isNameInclude = false,
  fId: id,
  onUpdateScore,
}: PDetailInfoProps) => {
  const [isMapModalVisible, setIsMapModalVisible] = useState(false);
  const [currentScore, setCurrentScore] = useState(score);

  const toggleMapModal = () => setIsMapModalVisible(prev => !prev);

  const onClickStarButtons = (newScore: number) => {
    setCurrentScore(newScore);
    if (onUpdateScore) {
      onUpdateScore(newScore);
    }
  };

  return (
    <S.PDetailInfo width={width} height={height}>
      {isNameInclude && (
        <>
          <S.Title>공연 이름</S.Title>
          <S.Value>{name}</S.Value>
          <S.Title>장르</S.Title>
          <S.Value>{category}</S.Value>
        </>
      )}
      <S.Title>장소</S.Title>
      <S.PlaceValueContainer>
        <S.Value>{place}</S.Value>
        <S.ModalButton onClick={toggleMapModal}>▶</S.ModalButton>
      </S.PlaceValueContainer>
      <S.Title>공연기간</S.Title>
      <S.Value>{duration}</S.Value>
      <S.Title>공연시간</S.Title>
      <S.Value>{time}</S.Value>
      <S.Title>관람연령</S.Title>
      <S.Value>{spectator}</S.Value>
      <S.Title>가격</S.Title>
      <S.Value>{price}</S.Value>
      <S.Title>평점</S.Title>
      <StarIconContainer initialRate={currentScore} updateStarRating={onClickStarButtons} />
      <MapModal place={place} visible={isMapModalVisible} onClose={toggleMapModal} id={id} />
    </S.PDetailInfo>
  );
};
