export default function getApiUrl<T>(endpoint: string, requestParams?: T) {
  const params = new URLSearchParams({
    service: import.meta.env.VITE_API_KEY,
    ...requestParams,
  });
  return `/api/${endpoint}?${params.toString()}`;
}
