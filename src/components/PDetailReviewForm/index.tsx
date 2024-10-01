import { useRef, useEffect } from 'react';
import { PDetailReviewInput } from '../PDetailReviewInput';
import * as S from './styles';

export const PDetailReviewForm = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);
  const isSubmittedRef = useRef<boolean>(false);

  useEffect(() => {
    const savedReview = localStorage.getItem('reviewData');
    const parsedReview = savedReview ? JSON.parse(savedReview).review : '';

    if (parsedReview.trim()) {
      updateUIForSubmittedState();
    } else {
      updateUIForEmptyState();
    }
    if (inputRef.current) {
      inputRef.current.addEventListener('input', updateCancelButton);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', updateCancelButton);
      }
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const review = inputRef.current.value.trim();
      if (review !== '') {
        localStorage.setItem('reviewData', JSON.stringify({ review }));
        updateUIForSubmittedState();
      } else {
        localStorage.removeItem('reviewData'); // 로컬 스토리지에서 기존 데이터를 삭제
        updateUIForEmptyState();
      }
    }
  };

  const updateUIForSubmittedState = () => {
    isSubmittedRef.current = true;
    if (inputRef.current) {
      inputRef.current.disabled = true;
      inputRef.current.style.backgroundColor = 'white';
    }
    if (submitButtonRef.current) submitButtonRef.current.style.display = 'none';
    if (editButtonRef.current) editButtonRef.current.style.display = 'inline-block';
    if (cancelButtonRef.current) cancelButtonRef.current.style.display = 'none';
  };

  const updateUIForEmptyState = () => {
    isSubmittedRef.current = false;
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.style.backgroundColor = 'white';
    }
    if (submitButtonRef.current) submitButtonRef.current.style.display = 'inline-block';
    if (editButtonRef.current) editButtonRef.current.style.display = 'none';
    if (cancelButtonRef.current) cancelButtonRef.current.style.display = 'none';
  };

  const onEdit = () => {
    isSubmittedRef.current = false;
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
    }
    if (editButtonRef.current) editButtonRef.current.style.display = 'none';
    if (submitButtonRef.current) submitButtonRef.current.style.display = 'inline-block';
  };

  const onCancel = () => {
    if (inputRef.current) {
      const savedReview = JSON.parse(localStorage.getItem('reviewData') || '{}').review || '';
      inputRef.current.value = savedReview;
      if (savedReview.trim() !== '') {
        updateUIForSubmittedState();
      } else {
        updateUIForEmptyState();
      }
    }
  };

  const updateCancelButton = () => {
    if (inputRef.current && cancelButtonRef.current) {
      const savedReview = JSON.parse(localStorage.getItem('reviewData') || '{}').review || '';
      if (inputRef.current.value.trim() !== savedReview) {
        cancelButtonRef.current.style.display = 'inline-block';
      } else {
        cancelButtonRef.current.style.display = 'none';
      }
    }
  };

  const reviewData: { review: string } = JSON.parse(localStorage.getItem('reviewData') || '{}');

  return (
    <S.FormContainer onSubmit={onSubmit} ref={formRef}>
      <S.Label>리뷰</S.Label>
      <PDetailReviewInput
        name="review"
        ref={inputRef}
        defaultValue={reviewData.review || ''}
        $isSubmitted={isSubmittedRef.current}
      />
      <S.ButtonContainer>
        <S.SubmitButton type="submit" ref={submitButtonRef}>
          저장하기
        </S.SubmitButton>
        <S.EditButton type="button" onClick={onEdit} ref={editButtonRef} style={{ display: 'none' }}>
          수정하기
        </S.EditButton>
        <S.CancelButton type="button" onClick={onCancel} ref={cancelButtonRef} style={{ display: 'none' }}>
          취소
        </S.CancelButton>
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
