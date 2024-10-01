import { useRef, useEffect, useState } from 'react';
import { PDetailReviewInput } from '../PDetailReviewInput';
import * as S from './styles';

export const PDetailReviewForm = () => {
  const initialReview = localStorage.getItem('review') || '';
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [review, setReview] = useState(initialReview);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const reviewData = form.get('review') as string;
    localStorage.setItem('review', reviewData);
    setIsEditing(false);
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target instanceof HTMLTextAreaElement) setReview(e.target.value);
  };
  const onClickCancelButton = () => {
    setIsEditing(false);
    setReview(initialReview);
  };
  const onClickEditButton = () => setIsEditing(true);

  useEffect(() => {
    if (isEditing) {
      inputRef?.current?.focus();
      inputRef?.current?.setSelectionRange(review.length, review.length);
    }
  }, [inputRef, isEditing]);

  return (
    <S.FormContainer onSubmit={onSubmit} ref={formRef}>
      <S.Label>리뷰</S.Label>
      <PDetailReviewInput name="review" ref={inputRef} disabled={!isEditing} value={review} onChange={onChange} />
      <S.ButtonContainer>
        {isEditing ? (
          <>
            <S.SaveButton disabled={initialReview === review}>저장하기</S.SaveButton>
            <S.CancelButton type="button" onClick={onClickCancelButton}>
              취소
            </S.CancelButton>
          </>
        ) : (
          <S.EditButton onClick={onClickEditButton}>수정하기</S.EditButton>
        )}
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
