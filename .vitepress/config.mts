import { defineConfig } from "vitepress";

export default defineConfig({
  title: "JK-study",
  description: "함수형 프로그래밍 학습 기록",
  lang: "ko-KR",
  themeConfig: {
    nav: [
      { text: "홈", link: "/" },
      { text: "함수형 프로그래밍", link: "/functional-programming/" },
      { text: "React", link: "/react/" },
    ],

    outline: {
      label: "목차",
    },

    docFooter: {
      prev: "이전",
      next: "다음",
    },

    darkModeSwitchLabel: "다크 모드",
    sidebarMenuLabel: "메뉴",
    returnToTopLabel: "맨 위로",

    editLink: {
      pattern: "https://github.com/junbox98221/JK-study/edit/main/:path",
      text: "Github에서 수정하기",
    },

    lastUpdated: {
      text: "최종 업데이트",
      formatOptions: {
        dateStyle: "short",
      },
    },

    sidebar: [
      {
        text: "함수형 프로그래밍",
        items: [
          {
            text: "스터디 가이드",
            link: "/functional-programming/",
          },
          {
            text: "Part 1: 액션과 계산, 데이터",
            collapsed: false,
            items: [
              {
                text: "3. 액션과 계산, 데이터의 차이를 알기",
                link: "/functional-programming/part1/ch03",
              },
              {
                text: "4. 액션에서 계산 빼내기",
                link: "/functional-programming/part1/ch04",
              },
              {
                text: "5. 더 좋은 액션 만들기",
                link: "/functional-programming/part1/ch05",
              },
              {
                text: "6. 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기",
                link: "/functional-programming/part1/ch06",
              },
              {
                text: "7. 신뢰할 수 없는 코드를 쓰면서 불변성 지키기",
                link: "/functional-programming/part1/ch07",
              },
              {
                text: "8. 계층형 설계 I",
                link: "/functional-programming/part1/ch08",
              },
              {
                text: "9. 계층형 설계 II",
                link: "/functional-programming/part1/ch09",
              },
            ],
          },
          {
            text: "Part 2: 일급 추상",
            collapsed: false,
            items: [
              {
                text: "10. 일급 함수 I",
                link: "/functional-programming/part2/ch10",
              },
              {
                text: "11. 일급 함수 II",
                link: "/functional-programming/part2/ch11",
              },
              {
                text: "12. 함수형 반복",
                link: "/functional-programming/part2/ch12",
              },
              {
                text: "13. 함수형 도구 체이닝",
                link: "/functional-programming/part2/ch13",
              },
              {
                text: "14. 중첩된 데이터에 함수형 도구 사용하기",
                link: "/functional-programming/part2/ch14",
              },
              {
                text: "15. 타임라인 격리하기",
                link: "/functional-programming/part2/ch15",
              },
              {
                text: "16. 타임라인 사이에 자원 공유하기",
                link: "/functional-programming/part2/ch16",
              },
              {
                text: "17. 타임라인 조율하기",
                link: "/functional-programming/part2/ch17",
              },
              {
                text: "18. 반응형 아키텍처와 어니언 아키텍처",
                link: "/functional-programming/part2/ch18",
              },
              {
                text: "19. 함수형 프로그래밍 여행에 앞서",
                link: "/functional-programming/part2/ch19",
              },
            ],
          },
        ],
      },
      {
        text: "React",
        items: [
          {
            text: "스터디 가이드",
            link: "/react/",
          },
          {
            text: "Hooks",
            collapsed: false,
            items: [
              {
                text: "6. useState의 state는 어떤 코드로 쓰여있나?!",
                link: "/react/part1/ch06",
              },
              {
                text: "7. 훅 업데이트와 dispatchAction",
                link: "/react/part1/ch07",
              },
              {
                text: "8. idle과 render 페이즈",
                link: "/react/part1/ch08",
              },
              {
                text: "9. 렌더 페이즈의 업데이트",
                link: "/react/part1/ch09",
              },
            ],
          },
        ],
      },
    ],
    

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
