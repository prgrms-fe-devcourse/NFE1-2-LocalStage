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
  const isModifiedRef = useRef<boolean>(false);

  useEffect(() => {
    const savedReview = localStorage.getItem('reviewData');
    const parsedReview = savedReview ? JSON.parse(savedReview).review : '';

    if (parsedReview.trim()) {
      updateUIForSubmittedState();
    } else {
      updateUIForEmptyState();
    }
    if (inputRef.current) {
      inputRef.current.addEventListener('input', handleInputChange);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', handleInputChange);
      }
    };
  }, []);

  const handleInputChange = () => {
    if (inputRef.current && submitButtonRef.current) {
      const savedReview = JSON.parse(localStorage.getItem('reviewData') || '{}').review || '';
      if (inputRef.current.value.trim() !== savedReview) {
        submitButtonRef.current.style.opacity = '1';
        submitButtonRef.current.disabled = false; 
        isModifiedRef.current = true;
      } else {
        submitButtonRef.current.style.opacity = '0.5';
        submitButtonRef.current.disabled = true;
        isModifiedRef.current = false;
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const review = inputRef.current.value.trim();
      if (review !== '') {
        localStorage.setItem('reviewData', JSON.stringify({ review }));
        updateUIForSubmittedState();
      } else {
        localStorage.removeItem('reviewData');
        updateUIForEmptyState();
      }
    }
  };

  const updateUIForSubmittedState = () => {
    isSubmittedRef.current = true;
    if (inputRef.current) {
      inputRef.current.disabled = true;
    }
    if (submitButtonRef.current) {
      submitButtonRef.current.style.display = 'none';
      submitButtonRef.current.style.opacity = '1';
      submitButtonRef.current.disabled = false;
    }
    if (editButtonRef.current) editButtonRef.current.style.display = 'inline-block';
    if (cancelButtonRef.current) cancelButtonRef.current.style.display = 'none';
  };

  const updateUIForEmptyState = () => {
    isSubmittedRef.current = false;
    if (inputRef.current) {
      inputRef.current.disabled = false;
    }
    if (submitButtonRef.current) {
      submitButtonRef.current.style.display = 'inline-block';
      submitButtonRef.current.style.opacity = '0.5';
      submitButtonRef.current.disabled = true; 
    }
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
    if (submitButtonRef.current) {
      submitButtonRef.current.style.display = 'inline-block';
      submitButtonRef.current.style.opacity = isModifiedRef.current ? '1' : '0.5';
      submitButtonRef.current.disabled = !isModifiedRef.current;
    }
    if (editButtonRef.current) editButtonRef.current.style.display = 'none';
    if (cancelButtonRef.current) cancelButtonRef.current.style.display = 'inline-block';
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
        <S.SubmitButton type="submit" ref={submitButtonRef} style={{ opacity: '0.5' }} disabled>
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
