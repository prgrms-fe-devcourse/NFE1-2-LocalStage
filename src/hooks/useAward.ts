import useFetch from '@/hooks/useFetch';
import { AwardRequestType, AwardResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 18. 수상작목록조회서비스
/**
 * 수상작 목록을 조회하는 서비스입니다.
 *
 * @param {AwardRequestType} params - 수상작 목록 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: AwardResponseType | undefined, isLoading: boolean }} - 수상작 목록 데이터와 로딩 상태를 반환합니다.
 */
export default function useAward(params: AwardRequestType) {
  const url = getApiUrl<AwardRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<AwardResponseType>(url);
  return { data, isLoading };
}
