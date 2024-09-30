import * as S from './styles';

export const PDetailReviewInput = ({ ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <S.PDetailReviewInput placeholder="공연에 대한 리뷰를 남겨주세요." {...rest} />;
};
