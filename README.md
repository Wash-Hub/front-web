# 📺 워시허브 - 코인 세탁소, 인생네컷 길잡이 플랫폼

- 배포 URL :
- Test ID :
- Test PW :

<br>

## 프로젝트 소개

- 지역 내에 있는 코인 세탁소, 인생네컷의 위치를 보다 쉽게 찾을 수 있도록 도와주며
- 리뷰를 남겨 해당 장소를 공유할 수 있는 플랫폼입니다.

<br>

## 팀원 구성

<div align="center">

| **오하민** | 
| :------: |  
| [<img width="140px" src="https://avatars.githubusercontent.com/u/113972482?v=4" height=150 width=150> <br/> @ohamin26](https://github.com/ohamin26) |

</div>

<br>

## 1. 개발 환경

- Front : typescript, React, vanilla-extract, Recoil, React-query
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : aws cloud front
- 협업 툴 : notion, discord
  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, vanilla-extract

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성에 특화된 React를 선택하였습니다.
- Vanilla-extract
  - emotion, tailwind, vanilla-extract 중에 고민하였으나 zero-runtime CSS인 vanilla-extract가 개인 프로젝트가 적합하다 판단되어 선택하였습니다.

### Recoil, React-query

- 클라이언트 상태와 서버 상태를 분리하여 관리하기 위해 클라이언트 상태를 관리하기 위해 Recoil를 채택하였으며,
- 서버 상태를 관리하기 위해 React-query를 채택하여 개발하였습니다.

### eslint, prettier

- eslint와 prettier를 통해 일관된 코드를 작성하기 위해 도입했습니다.

### aws cloud front

- 서버와 동일한 환경에서의 배포를 위해 cloud front를 채택하였습니다.  

### 브랜치 전략

- Git-flow를 채택하였으며, main, dev, feat로 구분하여 진행하였습니다.
  - **main** 배포용으로 최종적으로 적용할 기능만을 합쳤습니다.
  - **dev** 모든 기능을 합치고 개발과 테스트 단계에 사용하는 브랜치 입니다.
  - **Feat** 개발을 효율적으로 진행하기 위해 기능 단위로 브랜치을 생성하여 dev 브랜치에 합치는 방식으로 진행하였습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── pmpm-lock.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
│
│
└── src
     ├── App.tsx
     ├── main.tsx
     ├── asset
     ├── routes
     └── styles
           └── Globalstyled.tsx
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 :
- UI 구현 :
- 기능 구현 :

<br>

### 작업 관리

- Gihub를 통해 관리하였습니다.

## 5. 페이지별 기능

## 6. 트러블 슈팅
