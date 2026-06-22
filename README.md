# cursor-demo

회원 목록에서 유효한 이메일만 추출하고 중복을 제거하는 Node.js 데모 프로젝트입니다.

## 사용법

```bash
npm test
node src/index.js
```

## 릴리스 노트

### v1.0.0

**회원 목록에서 유효한 이메일만 추출·중복 제거하는 기능과 테스트를 추가한 첫 기능 릴리스입니다.**

#### ✨ 기능

- RFC 5322 기반 이메일 유효성 검사 (`isValidEmail`) 추가
- 회원 목록에서 이메일 추출 (`extractEmails`), 유효 이메일 필터링 (`getValidEmails`) 추가
- 유효 이메일 중복 제거 (`uniqueValidEmails`) 추가
- `src/index.js` 데모 진입점 추가
- `node --test` 기반 테스트 스크립트 및 `src/email.test.js` 테스트 추가

#### 🐛 버그 수정

- 해당 없음

#### 🧹 기타

- `.cursor/rules/coding-style.mdc` 프로젝트 코딩 규칙 추가
- `package.json` 프로젝트 메타데이터 및 테스트 스크립트 설정
