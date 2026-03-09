# Mine-Log

**내가 쓰려고 만든 근무용 데일리 대시보드** <br />

## 📌 목적

- **Nextjs 학습 (Hydration 실무 적용) :** Next.js의 Hydration 과정을 깊이 이해하고, 컴포넌트 성격에 맞춰 SSR과 CSR을 전략적으로 혼합했습니다.
- **로그인 프리(Login-free) 설계 :** 사무실에서 빠르고 간편하게 사용하기 위해 복잡한 인증 절차를 제거하고, 개인 데이터를 안전하게 로컬 환경에 유지합니다.

## 🛠 핵심 기술 및 설계 (Key Features & Architecture)

### 1. 효율적인 데이터 저장

- **LocalStorage 기반 데이터 관리:** 데이터베이스 서버 구축 대신 브라우저의 `localStorage`를 채택했습니다.
- **상태 동기화:** `state` 값이 변경될 때마다 `useEffect`를 통해 로컬 스토리지와 실시간으로 동기화하여 브라우저를 새로고침해도 데이터가 유지됩니다.

### 2. 전략적 렌더링 및 로딩 최적화

컴포넌트의 특성(Client vs Server)에 따라 최적의 로딩 사용자 경험(UX)을 제공하도록 설계했습니다.

- **Client Components:** `next/dynamic` (with `ssr: false`)을 활용하여 브라우저에서 필요한 시점에 동적으로 로드합니다.
- **Server Components:** `Suspense`를 활용하여 서버 사이드에서 데이터 준비 시점까지 스켈레톤이나 로딩 UI를 자연스럽게 노출합니다.

### 3. 반응형 디자인 (UI/UX)

- **Tailwind CSS:** 생산성 높은 CSS 프레임워크를 사용하여 UI를 구현하였습니다.
- **Responsive Web:** 모바일과 데스크톱 환경 모두에서 최적화된 대시보드 레이아웃을 제공합니다.

## 🔗 Live Demo

- **주소:** [https://mine-log.vercel.app](https://mine-log.vercel.app)
