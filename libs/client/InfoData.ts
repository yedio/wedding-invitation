export const info = {
  coverHero: {
    particleVideoUrl: "/img/particle/particle_flower_00.mp4",
    /** 히어로 전체 배경(커플 사진 등) — object-cover */
    backgroundImageUrl: "/img/pictures/cover_1.jpg",
  },
  date: {
    /** 예식 일시 `YYYY.MM.DD` 또는 `YYYY.MM.DD HH:mm[:ss]` */
    at: "2026.09.12 11:10:00",
    groom: "이진형",
    bride: "석예주",
  },
  time: "18:30",
  location: {
    place: "더컨벤션 송파문정",
    hall: "13층 아모르홀",
    address: "서울 송파구 송파대로 155",
    tel: "02-6418-5000",
    mapAddress: {
      kakao: "https://place.map.kakao.com/167068900",
      naver: "https://naver.me/F884QRmt",
      tmap: "https://tmap.life/5e032fde",
    },
  },
  weddingIntro: {
    imageUrl: "/img/pictures/invitation_1.jpg",
    groomLine: {
      parent1: "이인출",
      parent2: "김득진",
      self: "이진형",
    },
    brideLine: {
      parent1: "석해준",
      parent2: "박서윤",
      self: "석예주",
    },
  },
  weddingContacts: {
    groomSide: {
      title: "신랑측",
      rows: [
        { role: "신랑", name: "이진형", phone: "010-0000-0001" },
        { role: "아버지", name: "이인출", phone: "010-0000-0002" },
        { role: "어머니", name: "김득진", phone: "010-0000-0003" },
      ],
    },
    brideSide: {
      title: "신부측",
      rows: [
        { role: "신부", name: "석예주", phone: "010-2717-5360" },
        { role: "아버지", name: "석해준", phone: "010-9500-0005" },
        { role: "어머니", name: "박서윤", phone: "010-0000-0006" },
      ],
    },
  },
  baby: { name: "석연지", shortName: "연지" },
  /** 마음 전하실 곳 — 신랑측·신부측 → 내부에 역할별 계좌 */
  giftAccountSides: [
    {
      title: "신랑측",
      rows: [
        {
          role: "신랑",
          bankName: "국민은행",
          accountNumber: "123456-78-000001",
          holderName: "이진형",
        },
        {
          role: "아버지",
          bankName: "국민은행",
          accountNumber: "123456-78-000002",
          holderName: "이인출",
        },
        {
          role: "어머니",
          bankName: "신한은행",
          accountNumber: "123456-78-000003",
          holderName: "김득진",
        },
      ],
    },
    {
      title: "신부측",
      rows: [
        {
          role: "신부",
          bankName: "우리은행",
          accountNumber: "123456-78-000004",
          holderName: "석예주",
        },
        {
          role: "아버지",
          bankName: "국민은행",
          accountNumber: "123456-78-000005",
          holderName: "석해준",
        },
        {
          role: "어머니",
          bankName: "우리은행",
          accountNumber: "123456-78-000006",
          holderName: "박서윤",
        },
      ],
    },
  ],
  text: {
    invitation: `11번째 여름을 함께한 두 사람이\n이제는 평생의 모든 계절을 함께하려 합니다.\n\n반짝이는 9월의 햇살 아래,\n소중한 분들을 초대합니다.\n\n귀한 걸음 하시어\n축복해 주시면 감사하겠습니다.`,
  },
};
