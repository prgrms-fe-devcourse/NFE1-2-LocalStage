import { Boxof } from '@/types/apis';
/**
 * 원하는 배열 길이만큼 입력 리스트를 잘라서 반환합니다.
 * slice를 입력하지 않으면 그대로 반환합니다.
 * pList가 객체라면 배열로 바꿔줍니다.
 * @param pList 공연리스트
 * @param slice 원하는 배열 길이
 * @
 */
export default function FillterGenreRank(pList: Boxof[] | Boxof | undefined, slice?: number) {
  if (!pList) return [];
  let copy;
  if (Array.isArray(pList)) {
    copy = slice ? [...pList].slice(0, slice) : [...pList];
  } else {
    copy = [pList];
  }
  return copy;
}

export const convertToArray = (arg: unknown) => {
  if (Array.isArray(arg)) return arg;
  // Array가 아님
  return [arg];
};

export const convertEmptyObject = (obj: unknown) => {
  const json = JSON.stringify(obj);
  return json === '{}' ? '' : (obj as string);
};
