import { AreaName, AreaCode } from '@/types/areaCodeName';

export const areaMap: Record<AreaName, AreaCode> = {
  전체: '전체',
  서울: '11',
  경기: '41',
  인천: '28',
  강원: '42',
  충북: '43',
  충남: '44',
  경북: '47',
  경남: '48',
  전북: '45',
  전남: '46',
  제주: '50',
} as const;

export const getAreaNameByCode = (code: AreaCode): AreaName => {
  const entry = Object.entries(areaMap).find(([_, value]) => value === code);
  return entry ? (entry[0] as AreaName) : '전체';
};

export const areaEntries = Object.entries(areaMap) as [AreaName, AreaCode][];
