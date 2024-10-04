import { useParams } from 'react-router-dom';
import * as S from './styles';

export default function SearchPage() {
  const { query } = useParams<{ query: string }>();

  return <S.SearchPage>SearchPage {query}</S.SearchPage>;
}
