import useFetch from '@/hooks/useFetch';
import { PerformanceListRequestType, PerformanceListResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

export default function usePerformanceList(params: PerformanceListRequestType) {
  const url = getApiUrl<PerformanceListRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<PerformanceListResponseType>(url);
  return { data, isLoading };
}
