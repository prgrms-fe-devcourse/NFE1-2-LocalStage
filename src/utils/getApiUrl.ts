/**
 * API URL을 생성하는 함수입니다.
 *
 * @param {string} endpoint - API의 엔드포인트를 나타내는 문자열입니다.
 * @param {T} [requestParams] - 요청에 필요한 매개변수 객체입니다. 선택적으로 제공할 수 있습니다.
 * @returns {string} - 구성된 API URL을 반환합니다.
 */
export default function getApiUrl<T>(endpoint: string, requestParams?: T) {
  const params = new URLSearchParams({
    service: import.meta.env.VITE_API_KEY,
    ...requestParams,
  });
  return `/api/${endpoint}?${params.toString()}`;
}
