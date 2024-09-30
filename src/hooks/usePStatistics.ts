import useFetch from '@/hooks/useFetch';
import { PStatisticsRequestType, PStatisticsResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 15. 공연별통계목록조회서비스
/**
 * 공연별 통계 목록을 조회하는 서비스입니다.
 *
 * @param {PStatisticsRequestType} params - 공연별 통계 목록 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: PStatisticsResponseType | undefined, isLoading: boolean }} - 공연별 통계 데이터와 로딩 상태를 반환합니다.
 * @example
 * const { data } = usePStatistics({ cpage: 1, eddate: '20240901', rows: 10, stdate: '20240505' });

 */
export default function usePStatistics(params: PStatisticsRequestType) {
  const url = getApiUrl<PStatisticsRequestType>('prfstsPrfBy', params);
  const { data, isLoading } = useFetch<PStatisticsResponseType>(url);
  return { data, isLoading };
}
