/**
 * 객체의 '_text' 속성을 해당 값으로 대체하는 함수
 *
 * @template T - 입력 객체의 타입
 * @param {T} obj - 가장 안쪽의 값을 추출할 객체
 * @returns {T} '_text' 속성이 해당 값으로 대체된 입력 객체와 동일한 구조의 새로운 객체
 */
export default function replaceTextProperties<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(replaceTextProperties) as unknown as T;
  }

  if (obj && typeof obj === 'object' && '_text' in obj) {
    const textValue = obj._text;
    if (typeof textValue === 'string') {
      const parsedValue = +textValue;
      if (!isNaN(parsedValue)) {
        return parsedValue as T;
      }
    }
    return textValue as T;
  }

  const result: { [key: string]: T[keyof T] } = {};

  for (const [key, value] of Object.entries(obj)) {
    result[key] = replaceTextProperties(value);
  }

  return result as T;
}
