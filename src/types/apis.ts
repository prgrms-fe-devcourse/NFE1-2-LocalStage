// 공통 RequestType
interface CommonRequestType {
  /**
   * 서비스키 (필수)
   */
  service: string;
  /**
   * 공연시작일
   */
  stdate?: string;
  /**
   * 공연종료일
   */
  eddate?: string;
  /**
   * 현재페이지 (필수)
   */
  cpage?: string;
  /**
   * 페이지당목록 수 (필수)
   */
  rows?: string;
  /**
   * 공연명
   */
  shprfnm?: string;
  /**
   * 장르코드
   */
  shcate?: string;
  /**
   * 공연장코드
   */
  prfplccd?: string;
  /**
   * 지역(시도)코드
   */
  signgucode?: string;
  /**
   * 지역(구군)코드
   */
  signgucodesub?: string;
  /**
   * 아동공연여부
   */
  kidstate?: string;
  /**
   * 공연상태코드
   */
  prfstate?: string;
  /**
   * 통계기준
   */
  ststype?: string;
  /**
   * 기준일
   */
  date?: string;
  /**
   * 장르코드
   */
  catecode?: string;
  /**
   * 지역코드
   */
  area?: string;
  /**
   * 좌석수코드
   */
  srchseatscale?: string;
  /**
   * 공연 시설 명
   */
  shprfnmfct?: string;
  /**
   * 오픈런 여부 Y/N
   */
  openrun?: string;
  /**
   * 공연 ID
   */
  mt20id?: string;
  /**
   * 공연 시설 ID
   */
  mt10id?: string;
}
// 공통 ResponseType
interface Boxof {
  /**
   * 지역
   */
  area: string;
  /**
   * 상연횟수
   */
  prfdtcnt: string;
  /**
   * 공연장
   */
  prfplcnm: string;
  /**
   * 공연기간
   */
  prfpd: string;
  /**
   * 장르
   */
  cate: string;
  /**
   * 공연명
   */
  prfnm: string;
  /**
   * 순위
   */
  rnum: string;
  /**
   * 좌석수
   */
  seatcnt: string;
  /**
   * 포스터이미지
   */
  poster: string;
  /**
   * 공연ID
   */
  mt20id: string;
}

interface Db {
  /**
   * 수상 실적
   */
  awards: string;
  /**
   * (공연장) 홈페이지
   */
  relateurl: string;
  /**
   * 전화번호
   */
  telno: string;
  /**
   * 공연장 수
   */
  mt13cnt: string;
  /**
   * 객석 수
   */
  seatscale: string;
  /**
   * 시설 특성
   */
  fcltychartr: string;
  /**
   * 개관연도
   */
  opende: number;
  /**
   * 공연ID
   */
  mt20id: string;
  /**
   * 공연시설ID
   */
  mt10id: string;
  /**
   * 공연명
   */
  prfnm: string;
  /**
   * 공연시작일
   */
  prfpdfrom: string;
  /**
   * 공연종료일
   */
  prfpdto: string;
  /**
   * 공연시설명(공연장명)
   */
  fcltynm: string;
  /**
   * 포스터이미지경로
   */
  poster: string;
  /**
   * 장르명
   */
  genrenm: string;
  /**
   * 공연상태
   */
  prfstate: string;
  /**
   * 오픈런
   */
  openrun: string;
  /**
   * 소개이미지목록
   */
  styurls: { styurl: string }[];
  /**
   * 공연시간
   */
  dtguidance: string;
  /**
   * 공연관람연령
   */
  prfage: string;
  /**
   * 공연출연진
   */
  prfcast: string;
  /**
   * 공연제작진
   */
  prfcrew: string;
  /**
   * 공연런타임
   */
  prfruntime: string;
  /**
   * 제작사
   */
  entrpsnm: string;
  /**
   * 제작사
   */
  entrpsnmP: string;
  /**
   * 기획사
   */
  entrpsnmA: string;
  /**
   * 주최
   */
  entrpsnmH: string;
  /**
   * 주관
   */
  entrpsnmS: string;
  /**
   * 티켓가격
   */
  pcseguidance: string;
  /**
   * 줄거리
   */
  sty: string;
  /**
   * 내한
   */
  visit: string;
  /**
   * 아동
   */
  child: string;
  /**
   * 대학로
   */
  daehakro: string;
  /**
   * 축제
   */
  festival: string;
  /**
   * 뮤지컬 라이센스
   */
  musicallicense: string;
  /**
   * 뮤지컬 창작
   */
  musicalcreate: string;
  /**
   * 최종수정일
   */
  updatedate: string;
  /**
   * 도
   */
  la: number;
  /**
   * 도
   */
  lo: number;
  /**
   * 레스토랑
   */
  restaurant: string;
  /**
   * 페
   */
  cafe: string;
  /**
   * 편의점
   */
  store: string;
  /**
   * 이방
   */
  nolibang: string;
  /**
   * 유실
   */
  suyu: string;
  /**
   * 애시설
   */
  parkbarrier: string;
  /**
   * 애시설
   */
  restbarrier: string;
  /**
   * 애시설
   */
  runwbarrier: string;
  /**
   * 애시설엘리베이터
   */
  elevbarrier: string;
  /**
   * 주차 시설
   */
  parkinglot: string;
  area: string;
  /**
   * 켓가격
   */
  pcseguidanc: string;
  /**
   * 뮤지컬 라이센스
   */
  musicallicens: string;
  /**
   * 주소
   */
  adres: string;
}

interface Prfst {
  /**
   * 지역
   */
  area: string;
  /**
   * 공연장
   */
  prfplccnt: number;
  /**
   * 공연시설
   */
  fcltycnt: number;
  /**
   * 개막편수
   */
  prfprocnt: number;
  /**
   * 공연건수
   */
  prfcnt: number;
  /**
   * 상연횟수
   */
  prfdtcnt: number;
  /**
   * 좌석수
   */
  seatcnt: number;
  /**
   * 총티켓판매수
   */
  totnmrs: number;
  /**
   * 판매수/관객수
   */
  nmrs: number;
  /**
   * 취소수
   */
  nmrcancl: number;
  /**
   * 총티켓판매액
   */
  amount: number;
  /**
   * 장르
   */
  cate: string;
  /**
   * 매출액점유율
   */
  amountshr: number;
  /**
   * 관객점유율
   */
  nmrsshr: number;
  /**
   * 공연시설명
   */
  fcltynm: string;
  /**
   * 공연명
   */
  prfnm: string;
  /**
   * 공연ID
   */
  mt20id: string;
  /**
   * 기획/제작사
   */
  entrpsnm: string;
  /**
   * 공연시작일
   */
  prfpdfrom: string;
  /**
   * 공연종료일
   */
  prfpdto: string;
}

//* 1. 공연목록조회서비스
export type PListRequestType = Partial<
  Pick<
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
  >
>;
export type PListResponseType = {
  dbs?: {
    db: Pick<
      Db,
      'mt20id' | 'prfnm' | 'genrenm' | 'prfstate' | 'prfpdfrom' | 'prfpdto' | 'poster' | 'fcltynm' | 'openrun' | 'area'
    >;
  }[];
};

//* 2. 공연상세조회서비스
export type PDetailRequestType = Partial<Pick<CommonRequestType, 'service' | 'mt20id'>>;
export type PDetailResponseType = {
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
export type FacilityDetailRequestType = Partial<Pick<CommonRequestType, 'service' | 'mt10id'>>;
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
export type BoxOfficeRequestType = Partial<
  Pick<CommonRequestType, 'service' | 'ststype' | 'date' | 'catecode' | 'area' | 'srchseatscale'>
>;
export type BoxOfficeResponseType = {
  boxofs?: {
    basedate: string;
    boxof: Boxof[];
  }[];
};

//* 15. 공연별통계목록조회서비스
export type PStatisticsRequestType = Partial<
  Pick<CommonRequestType, 'service' | 'cpage' | 'rows' | 'stdate' | 'eddate' | 'shcate' | 'shprfnm'>
>;
export type PStatisticsResponseType = {
  prfst?: Pick<Prfst, 'prfnm' | 'cate' | 'mt20id' | 'fcltynm' | 'entrpsnm' | 'prfpdfrom' | 'prfpdto' | 'prfdtcnt'>[];
};

//* 18. 수상작목록조회서비스
export type AwardRequestType = Partial<
  Pick<
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
  >
>;
export type AwardResponseType = {
  db?: Pick<
    Db,
    'mt20id' | 'prfnm' | 'prfpdfrom' | 'prfpdto' | 'fcltynm' | 'poster' | 'genrenm' | 'prfstate' | 'awards'
  >;
};
