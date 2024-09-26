import useFetch from '@/hooks/useFetch';
import { BoxOfficeRequestType, BoxOfficeResponseType } from '@/types/apis';
import getApiUrl from '@/utils/getApiUrl';

//* 6. 예매상황판조회서비스
/**
 * 예매 상황판을 조회하는 서비스입니다.
 *
 * @param {BoxOfficeRequestType} params - 예매 상황판 조회에 필요한 요청 매개변수입니다.
 * @returns {{ data: BoxOfficeResponseType | undefined, isLoading: boolean }} - 예매 상황판 데이터와 로딩 상태를 반환합니다.
 */
export default function useBoxOffice(params: BoxOfficeRequestType) {
  const url = getApiUrl<BoxOfficeRequestType>('pblprfr', params);
  const { data, isLoading } = useFetch<BoxOfficeResponseType>(url);
  return { data, isLoading };
}
