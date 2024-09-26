import useFetch from '@/hooks/useFetch';
import { FacilityDetailRequestType, FacilityDetailResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 4. 공연시설상세조회서비스
/**
 * 공연 시설 상세 정보를 조회하는 서비스입니다.
 *
 * @param {FacilityDetailRequestType} params - 공연 시설 상세 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: FacilityDetailResponseType | undefined, isLoading: boolean }} - 공연 시설 상세 데이터와 로딩 상태를 반환합니다.
 */
export default function useFacilityDetail(params: FacilityDetailRequestType) {
  const url = getApiUrl<FacilityDetailRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<FacilityDetailResponseType>(url);
  return { data, isLoading };
}
