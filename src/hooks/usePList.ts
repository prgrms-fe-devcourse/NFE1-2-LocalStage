import useFetch from '@/hooks/useFetch';
import { PListRequestType, PListResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 1. 공연목록조회서비스
/**
 * 공연 목록을 조회하는 서비스입니다.
 *
 * @param {PListRequestType} params - 공연 목록 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: PListResponseType | undefined, isLoading: boolean }} - 공연 목록 데이터와 로딩 상태를 반환합니다.
 */
export default function usePList(params: PListRequestType) {
  const url = getApiUrl<PListRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<PListResponseType>(url);
  return { data, isLoading };
}
