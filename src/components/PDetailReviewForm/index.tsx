import { useState } from 'react';
import { PDetailReviewInput } from '../PDetailReviewInput';
import * as S from './styles';

export const PDetailReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [savedReview, setSavedReview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitForm = () => {
    if (reviewText.trim()) {
      setSavedReview(reviewText);
      setIsSubmitted(true);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  return (
    <S.FormContainer>
      <S.Label>리뷰</S.Label>
      <PDetailReviewInput
        value={isSubmitted ? savedReview : reviewText}
        onChange={onChange}
        disabled={isSubmitted}
        $isSubmitted={isSubmitted}
      />
      <S.SubmitButton onClick={onSubmitForm} disabled={isSubmitted || !reviewText.trim()}>
        저장하기
      </S.SubmitButton>
    </S.FormContainer>
  );
};
