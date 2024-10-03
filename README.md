# 📺 워시허브 - 코인 세탁소, 인생네컷 길잡이 플랫폼

- 배포 URL : https://www.washhub.co.kr/
- Test ID : 카카오 로그인을 이용해주세요😀
  
<br>

## 프로젝트 소개

- 저희 어플리케이션은 사용자에게 지역 내에 있는 여러 장소들의 위치를 알려줍니다.😀
- 사용자에게 방문하려는 장소에 대한 정보와 리뷰를 제공하여 길라잡이 역할을 수행하는 어플리케이션입니다.

<br>

## 팀원 구성

<div>

| **오하민** | 
| :------: |  
| [<img width="140px" src="https://avatars.githubusercontent.com/u/113972482?v=4" height=150 width=150> <br/> @ohamin26](https://github.com/ohamin26) |

</div>

<br>

## 1. 개발 환경

- Front : typescript, React, vanilla-extract, Recoil, React-query
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : aws Rout53, CloudFront, S3
- 협업 툴 : notion, discord
  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, vanilla-extract

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성에 특화된 React를 선택하였습니다.
- Vanilla-extract
  - emotion, tailwind, vanilla-extract 중에 고민하였으나 zero-runtime CSS인 vanilla-extract가 개인 프로젝트가 적합하다 판단되어 선택하였습니다.
  - 또한 vanilla-extract를 사용하면 tailwind와 달리 css 코드를 깔끔하게 처리할 수 있다는 점을 고려하여 선택하였습니다.

### Recoil, React-query

- 클라이언트 상태와 서버 상태를 분리하여 관리하기 위해 클라이언트 상태를 관리하기 위해 Recoil를 채택하였으며,
- 서버 상태를 관리하기 위해 React-query를 채택하여 개발하였습니다.
- recoil + react-query 조합으로 서버와 클라이언트 상태를 분리하여 관리함으로 클라이언트와 서버의 역할을 분리하고자 채택하였습니다.
- recoil의 경우 간단한 로직을 가지고 있어 주로 클라이언트 상태에 해당하는 전연 상태 등에 활용하였으며
- react-query의 겨우 데이터 패칭, 로딩, 에러, 리패칭 등이 용이함으로 서버 상태에 해당하는 api등을 관리하였습니다.

### eslint, prettier

- eslint와 prettier를 통해 일관된 코드를 작성하기 위해 도입했습니다.

### aws cloud front + Rout53 + S3
- vercel, netlify, amplify등을 고려하였으나 3가지 모두 간편하게 배포를 할 수 있다는 장점이 있지만
- 서버가 외국에 있어 성능 측면에서 랜더링 속도가 느리다는 점 등 사용자 경험에 좋지 않은 영향을 끼칠 가능성을 생각하였고
- 또한 추후 확장성을 고려하여
- cloud front + rout53 + s3조합을 선택하였습니다.

### 브랜치 전략
- Git-flow를 채택하였으며, main, dev, feat로 구분하여 진행하였습니다.
  - **main** 배포용으로 최종적으로 적용할 기능만을 합쳤습니다.
  - **dev** 모든 기능을 합치고 개발과 테스트 단계에 사용하는 브랜치 입니다.
  - **Feat** 개발을 효율적으로 진행하기 위해 기능 단위로 브랜치을 생성하여 dev 브랜치에 합치는 방식으로 진행하였습니다.

<br>

## 3. 프로젝트 구조
자세한 구조는 main 브랜치를 참고하주시면 감사하겠습니다.😀
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
├── config.ts
│
│
├── public
└── src
     ├── App.tsx
     ├── main.tsx
     ├── api
     ├── components
     ├── hooks
     ├── recoil/atoms
     ├── utils
     ├── asset
     ├── routes
     └── styles
```

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 
- 1차 UI 구현 : 2024-06-28 ~ 2024-07-10 (DeskTop)
- 2차 UI 구현 : 2024-10-02 ~ 2024-10-02 (Mobile)
- 1차 기능 구현 : 2024-08-24 ~ 2024-08-26 (로그인 기능 구현)
- 2차 기능 구현 : 2024-09-14 ~ 2024-09-29 (그 외 기능 구현)

<br>

### 작업 관리

- Gihub를 통해 관리하였습니다.

## 5. 페이지별 기능
### Main 페이지
 - 실시간 위치 리랜더링 기능 (https://ohamin26.tistory.com/41)
 - 위치를 기반하여 해당하는 장소만 사용자에게 제




## 6. 트러블 슈팅
