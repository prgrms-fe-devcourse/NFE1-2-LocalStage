import { useRef } from 'react';
import { PDetailReviewInput } from '../PDetailReviewInput';
import * as S from './styles';

export const PDetailReviewForm = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const form = new FormData($form);
    const review = form.get('review') as string;
    if (inputRef.current) inputRef.current.disabled = true;
    localStorage.setItem('temp', JSON.stringify({ review }));
  };

  const temp: { review: string; check: boolean } = JSON.parse(localStorage.getItem('temp') || '{}');

  return (
    <S.FormContainer onSubmit={onSubmit}>
      <S.Label>리뷰</S.Label>
      <PDetailReviewInput name="review" ref={inputRef} defaultValue={temp.review || ''} />
      <S.SubmitButton>저장하기</S.SubmitButton>
    </S.FormContainer>
  );
};
