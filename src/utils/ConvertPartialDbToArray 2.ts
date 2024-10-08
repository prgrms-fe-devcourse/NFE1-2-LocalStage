import { Db } from '@/types/apis';

type PartialDb = Pick<Db, 'area' | 'mt20id' | 'prfnm' | 'prfpdfrom' | 'prfpdto' | 'fcltynm' | 'poster' | 'genrenm'>;

export function ConvertPartialDbToArray(pList: PartialDb[] | PartialDb | undefined, slice?: number): PartialDb[] {
  if (!pList) return [];
  const array = Array.isArray(pList) ? pList : [pList];
  return slice ? array.slice(0, slice) : array;
}

export default {
  ConvertPartialDbToArray,
};
