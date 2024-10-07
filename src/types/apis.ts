// 공통 RequestType
export type CommonRequestType = {
  /**
   * 공연시작일
   * @example "20230101"
   */
  stdate: string;
  /**
   * 공연종료일
   * @example "20231231"
   */
  eddate: string;
  /**
   * 현재페이지 (필수)
   * @example "1"
   */
  cpage: number;
  /**
   * 페이지당목록 수 (필수)
   * @example "10"
   */
  rows: number;
  /**
   * 공연명
   * @example "햄릿"
   */
  shprfnm?: string;
  /**
   * 장르코드
   * @example "AAAA"
   */
  shcate?: string;
  /**
   * 공연장코드
   * @example "FC000003-01"
   */
  prfplccd?: string;
  /**
   * 지역(시도)코드
   * @example "11"
   */
  signgucode?: string;
  /**
   * 지역(구군)코드
   * @example "1111"
   */
  signgucodesub?: string;
  /**
   * 아동공연여부
   * @example "Y"
   * @default "N"
   */
  kidstate?: string;
  /**
   * 공연상태코드
   * @example "02"
   */
  prfstate?: string;
  /**
   * 요청구분
   * @example "month", "week", "day"
   */
  ststype?: 'month' | 'week' | 'day';
  /**
   * 기준일
   * @example "20230101"
   */
  date?: string;
  /**
   * 장르코드
   * @example "AAAA"
   */
  catecode?: string;
  /**
   * 지역코드
   * @example "11"
   */
  area?: number;
  /**
   * 좌석수코드
   * @example 0(미상), 100(1~300석 미만), 300(300~500석 미만), 500(500~1000석 미만), 1000(1000~5000석 미만), 5000(5000~10000석 미만), 10000(10000석 이상)
   */
  srchseatscale?: string;
  /**
   * 공연 시설 명
   * @example "예술의전당"
   */
  shprfnmfct?: string;
  /**
   * 오픈런 여부 Y/N
   * @example "Y"
   */
  openrun?: string;
  /**
   * 공연 ID
   * @example "PF123456"
   */
  mt20id?: string;
  /**
   * 공연 시설 ID
   * @example "FC000001"
   */
  mt10id?: string;
};

export type CommonResponseType = {
  /**
   * 지역
   * @example "서울"
   */
  area: string;
  /**
   * 상연횟수
   * @example 30
   */
  prfdtcnt: number;
  /**
   * 공연장
   * @example "예술의전당 오페라극장"
   */
  prfplcnm: string;
  /**
   * 공연기간
   * @example "2023.01.01~2023.12.31"
   */
  prfpd: string;
  /**
   * 장르
   * @example "뮤지컬"
   */
  cate: string;
  /**
   * 공연명
   * @example "캣츠"
   */
  prfnm: string;
  /**
   * 순위
   * @example 1
   */
  rnum: number;
  /**
   * 좌석수
   * @example 1000
   */
  seatcnt: number;
  /**
   * 포스터이미지
   * @example "https://example.com/poster.jpg"
   */
  poster: string;
  /**
   * 공연ID
   * @example "PF123456"
   */
  mt20id: string;
  /**
   * 수상 실적
   * @example "2022 더뮤지컬어워즈 대상"
   */
  awards: string;
  /**
   * (공연장) 홈페이지
   * @example "https://www.sac.or.kr"
   */
  relateurl: string;
  /**
   * 전화번호
   * @example "02-1234-5678"
   */
  telno: string;
  /**
   * 공연장 수
   * @example 3
   */
  mt13cnt: number;
  /**
   * 객석 수
   * @example 1200
   */
  seatscale: number;
  /**
   * 시설 특성 string / 공연시설특성코드 number
   * @example "대형 공연장"
   */
  fcltychartr: string | number;
  /**
   * 개관연도
   * @example 1995
   */
  opende: number;
  /**
   * 공연시설ID
   * @example "FC000001"
   */
  mt10id: string;
  /**
   * 공연시작일
   * @example "2023.01.01"
   */
  prfpdfrom: string;
  /**
   * 공연종료일
   * @example "2023.12.31"
   */
  prfpdto: string;
  /**
   * 공연시설명(공연장명)
   * @example "예술의전당 오페라극장"
   */
  fcltynm: string;
  /**
   * 장르명
   * @example "뮤지컬"
   */
  genrenm: string;
  /**
   * 공연상태
   * @example "공연중"
   */
  prfstate: string;
  /**
   * 오픈런
   * @example "Y"/"N"
   */
  openrun: string;
  /**
   * 소개이미지목록
   * @example [{ styurl: "https://example.com/image1.jpg" }, { styurl: "https://example.com/image2.jpg" }]
   */
  styurls: { styurl: string }[];
  /**
   * 공연시간
   * @example "화요일 ~ 금요일(20:00), 토요일(16:00,19:00), 일요일(15:00,18:00)"
   */
  dtguidance: string;
  /**
   * 공연관람연령
   * @example "만 7세 이상"
   */
  prfage: string;
  /**
   * 공연출연진
   * @example "김뮤지컬, 이뮤지컬, 박뮤지컬"
   */
  prfcast: string;
  /**
   * 공연제작진
   * @example "연출: 홍길동, 작곡: 김작곡, 안무: 이안무"
   */
  prfcrew: string;
  /**
   * 공연런타임
   * @example "2시간 30분"
   */
  prfruntime: string;
  /**
   * 제작사
   * @example "뮤지컬제작사"
   */
  entrpsnm: string;
  /**
   * 제작사
   * @example "뮤지컬제작사"
   */
  entrpsnmP: string;
  /**
   * 기획사
   * @example "뮤지컬기획사"
   */
  entrpsnmA: string;
  /**
   * 주최
   * @example "뮤지컬주최사"
   */
  entrpsnmH: string;
  /**
   * 주관
   * @example "뮤지컬주관사"
   */
  entrpsnmS: string;
  /**
   * 티켓가격
   * @example "VIP석 150,000원, R석 120,000원, S석 90,000원, A석 60,000원"
   */
  pcseguidance: string;
  /**
   * 줄거리
   * @example "뮤지컬 캣츠는 T.S. 엘리엇의 시집 '고양이들'을 바탕으로 만들어진 작품으로..."
   */
  sty: string;
  /**
   * 내한
   * @example "Y"
   */
  visit: string;
  /**
   * 아동
   * @example "N"
   */
  child: string;
  /**
   * 대학로
   * @example "N"
   */
  daehakro: string;
  /**
   * 축제
   * @example "N"
   */
  festival: string;
  /**
   * 뮤지컬 라이센스
   * @example "Y"
   */
  musicallicense: string;
  /**
   * 뮤지컬 창작
   * @example "N"
   */
  musicalcreate: string;
  /**
   * 최종수정일
   * @example "2019-07-25 10:03:14"
   */
  updatedate: string;
  /**
   * 위도
   * @example 37.5665
   */
  la: number;
  /**
   * 경도
   * @example 126.9780
   */
  lo: number;
  /**
   * 레스토랑
   * @example "Y"
   */
  restaurant: string;
  /**
   * 카페
   * @example "Y"
   */
  cafe: string;
  /**
   * 편의점
   * @example "Y"
   */
  store: string;
  /**
   * 노래방
   * @example "N"
   */
  nolibang: string;
  /**
   * 수유실
   * @example "Y"
   */
  suyu: string;
  /**
   * 장애인시설
   * @example "Y"
   */
  parkbarrier: string;
  /**
   * 장애인시설
   * @example "Y"
   */
  restbarrier: string;
  /**
   * 장애인시설
   * @example "Y"
   */
  runwbarrier: string;
  /**
   * 장애인시설엘리베이터
   * @example "Y"
   */
  elevbarrier: string;
  /**
   * 주차 시설
   * @example "Y"
   */
  parkinglot: string;
  /**
   * 티켓가격
   * @example "VIP석 150,000원, R석 120,000원, S석 90,000원, A석 60,000원"
   */
  pcseguidanc: string;
  /**
   * 주소
   * @example "서울특별시 송파구 올림픽로 424"
   */
  adres: string;
  /**
   * 공연장 수
   * @example 1353
   */
  prfplccnt: number;
  /**
   * 공연시설 수
   * @example 5
   */
  fcltycnt: number;
  /**
   * 개막편수
   * @example 10
   */
  prfprocnt: number;
  /**
   * 공연건수
   * @example 100
   */
  prfcnt: number;
  /**
   * 총티켓판매수
   * @example 50000
   */
  totnmrs: number;
  /**
   * 판매수/관객수
   * @example 45000
   */
  nmrs: number;
  /**
   * 취소수
   * @example 5000
   */
  nmrcancl: number;
  /**
   * 총티켓판매액
   * @example 5000000000
   */
  amount: number;
  /**
   * 매출액점유율
   * @example 0.25
   */
  amountshr: number;
  /**
   * 관객점유율
   * @example 0.3
   */
  nmrsshr: number;
};

// 공통 ResponseType
export type Boxof = Pick<
  CommonResponseType,
  'area' | 'prfdtcnt' | 'prfplcnm' | 'prfpd' | 'cate' | 'prfnm' | 'rnum' | 'seatcnt' | 'poster' | 'mt20id'
>;

export type Db = Pick<
  CommonResponseType,
  | 'awards'
  | 'relateurl'
  | 'telno'
  | 'mt13cnt'
  | 'seatscale'
  | 'fcltychartr'
  | 'opende'
  | 'mt20id'
  | 'mt10id'
  | 'prfnm'
  | 'prfpdfrom'
  | 'prfpdto'
  | 'fcltynm'
  | 'poster'
  | 'genrenm'
  | 'prfstate'
  | 'openrun'
  | 'styurls'
  | 'dtguidance'
  | 'prfage'
  | 'prfcast'
  | 'prfcrew'
  | 'prfruntime'
  | 'entrpsnm'
  | 'entrpsnmP'
  | 'entrpsnmA'
  | 'entrpsnmH'
  | 'entrpsnmS'
  | 'pcseguidance'
  | 'sty'
  | 'visit'
  | 'child'
  | 'daehakro'
  | 'festival'
  | 'musicallicense'
  | 'musicalcreate'
  | 'updatedate'
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
  | 'area'
  | 'pcseguidanc'
  | 'adres'
>;

type Prfst = Pick<
  CommonResponseType,
  | 'area'
  | 'prfplccnt'
  | 'fcltycnt'
  | 'prfprocnt'
  | 'prfcnt'
  | 'prfdtcnt'
  | 'seatcnt'
  | 'totnmrs'
  | 'nmrs'
  | 'nmrcancl'
  | 'amount'
  | 'cate'
  | 'amountshr'
  | 'nmrsshr'
  | 'fcltynm'
  | 'prfnm'
  | 'mt20id'
  | 'entrpsnm'
  | 'prfpdfrom'
  | 'prfpdto'
>;

//* 1. 공연목록조회서비스
export type PListRequestType = Required<Pick<CommonRequestType, 'stdate' | 'eddate' | 'cpage' | 'rows'>> &
  Partial<
    Pick<
      CommonRequestType,
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
    >[];
  };
};

//* 2. 공연상세조회서비스
export type PDetailRequestType = Pick<CommonRequestType, 'mt20id'>;
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
      | 'musicalcreate'
      | 'updatedate'
      | 'styurls'
      | 'dtguidance'
    >;
  };
};

//* 4. 공연시설상세조회서비스
export type FacilityDetailRequestType = Pick<CommonRequestType, 'mt10id'>;
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
  };
};

//* 6. 예매상황판조회서비스
export type BoxOfficeRequestType = Required<Pick<CommonRequestType, 'ststype' | 'date'>> &
  Partial<Pick<CommonRequestType, 'catecode' | 'area' | 'srchseatscale'>>;
export type BoxOfficeResponseType = {
  boxofs?: {
    basedate: string;
    boxof: Boxof[];
  };
};

//* 15. 공연별통계목록조회서비스
export type PStatisticsRequestType = Required<Pick<CommonRequestType, 'cpage' | 'rows' | 'stdate' | 'eddate'>> &
  Partial<Pick<CommonRequestType, 'shcate' | 'shprfnm'>>;
export type PStatisticsResponseType = {
  prfsts?: {
    prfst: Pick<Prfst, 'prfnm' | 'cate' | 'mt20id' | 'fcltynm' | 'entrpsnm' | 'prfpdfrom' | 'prfpdto' | 'prfdtcnt'>[];
  };
};

//* 18. 수상작목록조회서비스
export type AwardRequestType = Required<Pick<CommonRequestType, 'stdate' | 'eddate' | 'cpage' | 'rows'>> &
  Partial<
    Pick<
      CommonRequestType,
      'shcate' | 'shprfnm' | 'shprfnmfct' | 'prfplccd' | 'signgucode' | 'signgucodesub' | 'kidstate' | 'prfstate'
    >
  >;
export type AwardResponseType = {
  dbs?: {
    db: Pick<
      Db,
      'mt20id' | 'prfnm' | 'prfpdfrom' | 'prfpdto' | 'fcltynm' | 'poster' | 'genrenm' | 'prfstate' | 'awards'
    >[];
  };
};
