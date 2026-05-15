# Commit Convention

커밋 메시지는 아래 형식을 따릅니다.

```
<type>(<scope>): <subject>
```

- **type**: 변경 종류 (필수)
- **scope**: 영향 범위 — 파일·섹션·기능 단위 (선택, 예: `about`, `header`, `deps`)
- **subject**: 변경 내용을 한 줄로 요약 (필수)

## Types

| Type | 설명 | 예시 |
|------|------|------|
| **design** | CSS 등 사용자 UI 디자인 변경 | `design(about): adjust section spacing` |
| **style** | 코드 포맷 변경, 세미콜론 누락 등 **코드 동작/내용 수정이 없는** 경우 | `style: run prettier` |
| **chore** | 기능·버그·디자인 변경 없이 하는 유지 작업. **빌드·설정·의존성**, **UI 문구(카피)만 수정** 포함 | `chore(deps): bump vite` · `chore(about): update bio copy` |
| **deprecate** | 기능 지원을 중단하는 커밋 | `deprecate(works): remove legacy filter` |
| **docs** | README, COMMITS.md 등 **문서 파일** 수정 | `docs: add commit convention` |
| **feat** | 새 기능을 추가하는 커밋 | `feat(works): add project detail page` |
| **fix** | 버그·오류를 수정하는 커밋 (잘못된 UI 문구·오타 포함) | `fix(header): correct nav link href` |
| **release** | 새 버전 출시와 관련된 커밋 | `release: v1.0.0` |
| **refactor** | 기능·동작 변경 없이 코드 구조만 개선 | `refactor(about): extract copy to constants` |

## `chore` vs 비슷한 타입

| 상황 | 사용할 type |
|------|-------------|
| 컴포넌트 안 소개 문구·라벨·버튼 텍스트만 수정 | **chore** (`chore(about): …`) |
| `package.json`, Vite, ESLint, `.gitignore` 등 설정·빌드 | **chore** (`chore(deps): …`) |
| README 등 마크다운 문서만 수정 | **docs** |
| 문구 오류·잘못된 정보 수정 | **fix** |
| Prettier·ESLint 포맷만 | **style** |
| 색·레이아웃·타이포 등 시각 변경 | **design** |

설정 변경과 카피 수정은 같은 `chore`이므로, **scope**로 구분합니다 (`about`, `header`, `deps`, `vite` 등).

## 예시

```
chore(about): update role and bio text
chore(header): change nav label to Works
chore(deps): update vite config
fix(about): correct company name typo
docs: document commit types
```
