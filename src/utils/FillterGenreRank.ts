import { Boxof } from '@/types/apis';

export default function FillterGenreRank(pList: Boxof[] | Boxof | undefined) {
  if (!pList) return [];
  let copy;
  if (Array.isArray(pList)) {
    copy = [...pList].slice(0, 10);
  } else {
    copy = [pList];
  }
  return copy;
}
