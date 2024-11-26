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

## 프론트엔드 아키텍처

![image](https://github.com/user-attachments/assets/ac0b78e9-0e63-419b-b19f-1c11319713af)


## 1. 개발 환경

- Front : typescript, React, vanilla-extract, Recoil, React-query
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : aws Rout53, CloudFront, S3
- 협업 툴 : notion, discord
  <br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, TailwindCSS

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성에 특화된 React를 선택하였습니다.
- Vanilla-extract
  - 빠르고 불필요한 네이밍, 파일 생성 없이 스타일 적용 가능한 TailwindCSS를 선택하였습니다.

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
#### 지도 기능
 - 실시간 위치 재설정(https://ohamin26.tistory.com/41)
    - debounce를 활용하여 무분별한 api 호출을 줄여 필요한 시점에만 위치를 재설정하도록 구현하였습니다.
 - 위치를 기반하여 일정 범위 안에 있는 장소만 사용자에게 제공

https://github.com/user-attachments/assets/9dae10f0-dc44-4129-81f7-93fc7e9686fd

### 상세정보페이지
 - 사용자가 선택한 장소에 해당하는 정보를 제공

https://github.com/user-attachments/assets/b87144f9-6567-4651-bfcc-06287c933684

### 리뷰페이지
#### 리뷰보기
 - 해당 장소에 해당하는 리뷰 리스트를 보여줍니다.
 - 본인이 작성한 리뷰는 삭제 가능합니다.
#### 리뷰작성하기
 - 로그인한 유저에 한해서만 작성가능하도록 구현하였습니다.
 - 사진과 리뷰 내용 등록 가능합니다.
 - 리뷰 작성 시에 생기는 오류를 최소화하기 위해 리뷰 작성하기 이외의 컴포넌트 사용을 금지하였습니다.

https://github.com/user-attachments/assets/4aff6dfb-9e7f-41e2-b111-a27bc5bc7681

### 검색페이지
 - 사용자가 입력한 키워드가 포함되어 있는 모든 장소를 제공합니다.
 - 없을 시 예외처리 페이지가 보여집니다.
 - 페이지네이션을 적용하여 1페이지당 정해진 개수만 보여지도록 구현하였습니다.

https://github.com/user-attachments/assets/762df223-5335-4bcb-a3d8-5fad78f15b25

### 마이페이지
 - 로그인한 유저에 한해서만 보여지도록 구현하였습니다.
 - 유저 정보와 북마크 정보를 보여줍니다.
 - 로그아웃 시 로그아웃되며 메인페이지로 이동합니다.
#### 프로필 수정
 - 이메일과 이름을 수정할 수 있습니다.

https://github.com/user-attachments/assets/d649a2bc-d165-42ac-8209-0dadecae6ca8

### 예외처리
 - 프로젝트에서 사용된 예외처리입니다.
 - 로그인과 비로그인인 경우를 구분하였습니다.
 - 비정상적인 접근일 경우 오류 페이지로 이동하도록 구현하였습니다.
 - 오류가 발생할 여지가 있는 경우 해당 기능 이외의 다른 기능을 이용하지 못하도록 구현하였습니다.


https://github.com/user-attachments/assets/fc9b43ef-e3e5-423b-bc65-4cb91d9e3707

https://github.com/user-attachments/assets/563ee084-22b8-40cc-895e-84435adad0bc



## 6. 트러블 슈팅
### 1.지도에 마커를 띄우는 과정에서 마커에 등록한 클릭 이벤트가 정상적으로 작동되지 않는 버그 수정(https://ohamin26.tistory.com/40)
#### 구현하러던 기능
 - 카카오 지도 api에서 제공하는 customoverlay를 지도에 등록하고 클릭 이벤트를 등록하는 기능을 구현
 - 여러 개의 마커를 등록해야 하기에 각 마커의 장소에 해당하는 id값을 마커의 id값으로 등록하고 해당하는 id 값의 마커를 클릭 시 해당하는 장소를 보여주는 기능를 구현
#### 오류 내용
 - 마커를 클릭해면 등록한 클릭 이벤트가 작동해야 하는데 아무런 작동도 하지 않았습니다.
#### 이유
 - 마커 element에 등록된 id값을 확인하니 id값이 등록되어 있지 않은걸 확인하였습니다.
 - id값이 등록되어 있지 않으니 id값을 기반으로 작동하는 클릭 이벤트 또한 작동하지 않은 것이었습니다.
#### 해결방법
 - id값이 정상적으로 작동하지 않았던 이유를 customoverlay가 등록되는 시점보다 id값이 등록되는 시점이 더 빨라서 그랬을 거라고 추측하였습니다.
 - 그래서 id값이 등록되는 시점을 무조건 customoverlay가 등록되는 이후의 시점으로 변경하여 문제를 해결하였습니다.

### 2.홈페이지 배포 이후 서브 도메인으로 설정한 api 홈페이지에 라우팅되지 않는 버그 수정
#### 구현하려던 내용
 - 도메인 구매 후 서브 도메인을 구매하여 api 홈페이지로 사용하려고 하였습니다.
#### 오류 내용
 - 메인으로 사용하는 도메인은 정상적으로 작동하나 api 홈페이지로 사용하려는 도메인이 처음에는 정상적으로 작동하다가
 - 몇 시간 이후 작동하지 않는 버그가 발생하였습니다.
#### 이유
 - aws rout53를 사용해 도메인을 새로 설정하여 새로운 dns를 설정해주었는데
 - 기존에 도메인을 구매한 사이트의 dns 서버를 해제하여 서브로 설정한 도메인이 작동하지 않았습니다.
#### 해결방법
 - 서브로 설정한 도메인인 api 홈페이지를 rout53에 등록하여 해결하였습니다.
