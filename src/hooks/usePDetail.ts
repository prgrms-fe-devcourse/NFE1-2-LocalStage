import useFetch from '@/hooks/useFetch';
import { PDetailRequestType, PDetailResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 2. 공연상세조회서비스
/**
 * 공연 상세 정보를 조회하는 서비스입니다.
 *
 * @param {PDetailRequestType} params - 공연 상세 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: PDetailResponseType | undefined, isLoading: boolean }} - 공연 상세 데이터와 로딩 상태를 반환합니다.
 * @example
 * const { data } = usePDetail({ mt20id: 'PF132236' });
 */
export default function usePDetail(params: PDetailRequestType) {
  const url = getApiUrl<PDetailRequestType>(`pblprfr/${params.mt20id}`);
  const { data, isLoading } = useFetch<PDetailResponseType>(url);
  return { data, isLoading };
}
