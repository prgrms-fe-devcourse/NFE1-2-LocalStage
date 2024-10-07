import * as S from './styles';

interface PTitleProps {
  title: string;
  category: string;
}

export const PTitle = ({ title, category }: PTitleProps) => {
  return (
    <S.PTitle>
      {category}
      {' <'}
      {title}
      {'>'}
    </S.PTitle>
  );
};
