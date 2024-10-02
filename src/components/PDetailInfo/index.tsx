import * as S from './styles';

interface TitleProps {
  category: string;
  title: string;
}

export const Title = ({ category, title }: TitleProps) => {
  return (
    <S.Title>
      {category}
      {' <'}
      {title}
      {'>'}
    </S.Title>
  );
};
