import { useParams } from 'react-router-dom';
import * as S from './styles';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  return <S.DetailPage>DetailPage {id}</S.DetailPage>;
}
