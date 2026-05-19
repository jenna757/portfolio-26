# Portfolio

다크 네이비 레이아웃을 기반으로, About · Career · Works 세 섹션으로 구성 되어 있습니다.

## 기술 스택

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · MDX (`@mdx-js/rollup`)

## 테마 적용

- 기본값 — localStorage에 저장된 테마가 없으면 다크 모드입니다.
- 토글 — 라이트/다크를 바꾸면 localStorage의 theme 키에 'light' 또는 'dark'가 저장됩니다.
- 재방문 — 다음에 들어올 때 그 저장값을 읽어서, 마지막에 선택한 테마로 보여 줍니다.
