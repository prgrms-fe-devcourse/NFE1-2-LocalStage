// 공통 RequestType
interface CommonRequestType {
  service: string; // 서비스키 (필수)
  stdate?: string; // 공연시작일
  eddate?: string; // 공연종료일
  cpage?: string; // 현재페이지 (필수)
  rows?: string; // 페이지당목록 수 (필수)
  shprfnm?: string; // 공연명
  shcate?: string; // 장르코드
  prfplccd?: string; // 공연장코드
  signgucode?: string; // 지역(시도)코드
  signgucodesub?: string; // 지역(구군)코드
  kidstate?: string; // 아동공연여부
  prfstate?: string; // 공연상태코드
  ststype?: string; // 통계기준
  date?: string; // 기준일
  catecode?: string; // 장르코드
  area?: string; // 지역코드
  srchseatscale?: string; // 좌석수코드
  shprfnmfct?: string; // 공연 시설 명
  openrun?: string; // 오픈런 여부 Y/N
  mt20id?: string;
  mt10id?: string;
}
// 공통 ResponseType
interface Boxof {
  area: string; // 지역
  prfdtcnt: string; // 상연횟수
  prfplcnm: string; // 공연장
  prfpd: string; // 공연기간
  cate: string; // 장르
  prfnm: string; // 공연명
  rnum: string; // 순위
  seatcnt: string; // 좌석수
  poster: string; // 포스터이미지
  mt20id: string; // 공연ID
}

interface Db {
  awards: string; // 수상 실적
  relateurl: string; // (공연장) 홈페이지
  telno: string; // 전화번호
  mt13cnt: string; // 공연장 수
  seatscale: string; // 객석 수
  fcltychartr: string; // 시설 특성
  opende: number; // 개관연도
  mt20id: string; // 공연ID
  mt10id: string; // 공연시설ID
  prfnm: string; // 공연명
  prfpdfrom: string; // 공연시작일
  prfpdto: string; // 공연종료일
  fcltynm: string; // 공연시설명(공연장명)
  poster: string; // 포스터이미지경로
  genrenm: string; // 장르명
  prfstate: string; // 공연상태
  openrun: string; // 오픈런
  styurls: { styurl: string }[]; // 소개이미지목록
  dtguidance: string; // 공연시간
  prfage: string; // 공연관람연령
  prfcast: string; // 공연출연진
  prfcrew: string; // 공연제작진
  prfruntime: string; // 공연런타임
  entrpsnm: string; // 제작사
  entrpsnmP: string; // 제작사
  entrpsnmA: string; // 기획사
  entrpsnmH: string; // 주최
  entrpsnmS: string; // 주관
  pcseguidance: string; // 티켓가격
  sty: string; // 줄거리
  visit: string; // 내한
  child: string; // 아동
  daehakro: string; // 대학로
  festival: string; // 축제
  musicallicense: string; // 뮤지컬 라이센스
  musicalcreate: string; // 뮤지컬 창작
  updatedate: string; // 최종수정일
  la: number; //위도
  lo: number; //경도
  restaurant: string; // 레스토랑
  cafe: string; //카페
  store: string; // 편의점
  nolibang: string; //놀이방
  suyu: string; //수유실
  parkbarrier: string; //장애시설
  restbarrier: string; //장애시설
  runwbarrier: string; //장애시설
  elevbarrier: string; //장애시설엘리베이터
  parkinglot: string; // 주차 시설
  area: string;
  pcseguidanc: string; //티켓가격
  musicallicens: string; // 뮤지컬 라이센스
  adres: string; // 주소
}

interface Prfst {
  area: string; // 지역
  prfplccnt: number; // 공연장
  fcltycnt: number; // 공연시설
  prfprocnt: number; // 개막편수
  prfcnt: number; // 공연건수
  prfdtcnt: number; // 상연횟수
  seatcnt: number; // 좌석수
  totnmrs: number; // 총티켓판매수
  nmrs: number; // 판매수/관객수
  nmrcancl: number; // 취소수
  amount: number; // 총티켓판매액
  cate: string; // 장르
  amountshr: number; // 매출액점유율
  nmrsshr: number; // 관객점유율
  fcltynm: string; // 공연시설명
  prfnm: string; // 공연명
  mt20id: string; // 공연ID
  entrpsnm: string; // 기획/제작사
  prfpdfrom: string; // 공연시작일
  prfpdto: string; // 공연종료일
}

//* 1. 공연목록조회서비스
export type PerformanceListRequestType = Pick<
  CommonRequestType,
  | 'service'
  | 'stdate'
  | 'eddate'
  | 'cpage'
  | 'rows'
  | 'shcate'
  | 'shprfnm'
  | 'shprfnmfct'
  | 'prfplccd'
  | 'signgucode'
  | 'signgucodesub'
  | 'kidstate'
  | 'prfstate'
  | 'openrun'
>;
export type PerformanceListResponseType = {
  dbs?: {
    db: Pick<
      Db,
      'mt20id' | 'prfnm' | 'genrenm' | 'prfstate' | 'prfpdfrom' | 'prfpdto' | 'poster' | 'fcltynm' | 'openrun' | 'area'
    >;
  }[];
};

//* 2. 공연상세조회서비스
export type PerformanceDetailRequestType = Pick<CommonRequestType, 'service' | 'mt20id'>;
export type PerformanceDetailResponseType = {
  dbs?: {
    db: Pick<
      Db,
      | 'mt20id'
      | 'mt10id'
      | 'prfnm'
      | 'prfpdfrom'
      | 'prfpdto'
      | 'fcltynm'
      | 'prfcast'
      | 'prfcrew'
      | 'prfruntime'
      | 'prfage'
      | 'entrpsnmP'
      | 'entrpsnmA'
      | 'entrpsnmH'
      | 'entrpsnmS'
      | 'pcseguidanc'
      | 'poster'
      | 'sty'
      | 'genrenm'
      | 'prfstate'
      | 'openrun'
      | 'visit'
      | 'child'
      | 'daehakro'
      | 'festival'
      | 'musicallicens'
      | 'musicalcreate'
      | 'updatedate'
      | 'styurls'
      | 'dtguidance'
    >;
  }[];
};

//* 4. 공연시설상세조회서비스
export type FacilityDetailRequestType = Pick<CommonRequestType, 'service' | 'mt10id'>;
export type FacilityDetailResponseType = {
  dbs?: {
    db: Pick<
      Db,
      | 'mt10id'
      | 'fcltynm'
      | 'opende'
      | 'fcltychartr'
      | 'seatscale'
      | 'mt13cnt'
      | 'telno'
      | 'relateurl'
      | 'adres'
      | 'la'
      | 'lo'
      | 'restaurant'
      | 'cafe'
      | 'store'
      | 'nolibang'
      | 'suyu'
      | 'parkbarrier'
      | 'restbarrier'
      | 'runwbarrier'
      | 'elevbarrier'
      | 'parkinglot'
    >;
  }[];
};

//* 6. 예매상황판조회서비스
export type BoxOfficeRequestType = Pick<
  CommonRequestType,
  'service' | 'ststype' | 'date' | 'catecode' | 'area' | 'srchseatscale'
>;
export type BoxOfficeResponseType = {
  boxofs?: {
    basedate: string;
    boxof: Boxof[];
  }[];
};

//* 15. 공연별통계목록조회서비스
export type PerformanceStatisticsRequestType = Pick<
  CommonRequestType,
  'service' | 'cpage' | 'rows' | 'stdate' | 'eddate' | 'shcate' | 'shprfnm'
>;
export type PerformanceStatisticsResponseType = {
  prfst?: Pick<Prfst, 'prfnm' | 'cate' | 'mt20id' | 'fcltynm' | 'entrpsnm' | 'prfpdfrom' | 'prfpdto' | 'prfdtcnt'>[];
};

//* 18. 수상작목록조회서비스
export type AwardRequestType = Pick<
  CommonRequestType,
  | 'service'
  | 'stdate'
  | 'eddate'
  | 'cpage'
  | 'rows'
  | 'shcate'
  | 'shprfnm'
  | 'shprfnmfct'
  | 'prfplccd'
  | 'signgucode'
  | 'signgucodesub'
  | 'kidstate'
  | 'prfstate'
>;
export type AwardResponseType = {
  db?: Pick<
    Db,
    'mt20id' | 'prfnm' | 'prfpdfrom' | 'prfpdto' | 'fcltynm' | 'poster' | 'genrenm' | 'prfstate' | 'awards'
  >;
};
