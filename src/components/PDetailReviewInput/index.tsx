import * as S from './styles';

interface PDetailReviewInputProps {
  placeholder?: string;
}

export const PDetailReviewInput = ({ placeholder = '공연에 대한 리뷰를 남겨주세요.' }: PDetailReviewInputProps) => {
  return (
    <S.PDetailReviewInput>
      <S.PDetailReviewTextArea placeholder={placeholder} disabled />
    </S.PDetailReviewInput>
  );
};
