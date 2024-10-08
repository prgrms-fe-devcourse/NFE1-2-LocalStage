import { AreaName, AreaCode } from '@/types/areaCodeName';

export const areaMap: Record<AreaName, AreaCode> = {
  전체: '전체',
  서울: '서울특별시',
  경기: '경기도',
  인천: '인천광역시',
  강원도: '강원특별자치도',
  충청북도: '충청북도',
  충청남도: '충청남도',
  경상북도: '경상북도',
  경상남도: '경상남도',
  전라북도: '전라북도',
  전라남도: '전라남도',
  제주도: '제주특별자치도',
  대전: '대전광역시',
  대구: '대구광역시',
  부산: '부산광역시',
  울산: '울산광역시',
  광주: '광주광역시',
  세종시: '세종특별자치시',
} as const;

export type AreaMapKey = keyof typeof areaMap;
