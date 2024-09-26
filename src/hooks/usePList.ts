import useFetch from '@/hooks/useFetch';
import { PListRequestType, PListResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

export default function usePList(params: PListRequestType) {
  const url = getApiUrl<PListRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<PListResponseType>(url);
  return { data, isLoading };
}
