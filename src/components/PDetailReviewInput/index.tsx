import * as S from './styles';

interface PDetailReviewInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isSubmitted?: boolean;
}

export const PDetailReviewInput = ({ isSubmitted, ...rest }: PDetailReviewInputProps) => {
  return <S.PDetailReviewInput placeholder="공연에 대한 리뷰를 남겨주세요. " isSubmitted={isSubmitted} {...rest} />;
};
