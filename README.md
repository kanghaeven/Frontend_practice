<br>

## 230715

- 정보처리기사 데이터베이스
- 피그마 vscode 플러그인

<br>

## 230715

- 정보처리기사 2022 2,1회 기출문제

<br>

## 230714

- 정보처리기사 2022 3회 기출문제

<br>

## 230713

- 공통 PJT 1주차: 개인 공부 정리한 리드미 제출
- 리액트 모듈형 강의 component props
- Compound Component Pattern에 더 알아보기
  - React.StrictMode
  - React.Component
  - React.PureComponent
  - React.Fragment

매일 정리한게 과제에 도움이 많이 되었다. 정리하는 습관을 들여야겠다.

<br>

## 230712

- 리액트 모듈형 강의 JSX in action

```
const renderList = ({ reverse = false } = {}) => {
  let processArray = statusMessage;

  if (reverse) {
    processArray = [...statusMessage].reverse();
  }

  return processArray.map((message, idx) => <li key={idx}>{message}</li>);
};
```

- key가 중요한 이유 : 전과 현재 virual DOM을 비교해서 변경사항이 발생할 때만 새롭게 업데이트를 수행

- 비구조화 할당 : 객체나 배열에서 원하는 값들을 추출하여 변수에 할당하는 문법, 함수 호출 시 객체를 전달하지 않거나 속성이 명시적으로 설정되지 않은 경우에도 `={}`로 기본값을 설정할 수 있다.

<br>

## 230711

- 리액트 모듈형 강의 React with vite
  ESLint 플러그인 설치 및 구성<br>
  에셋 활용 방법 @eslint/config 설치 구성<br>
  public, src/assets 디렉토리 에셋 관리<br>

<br>

## 230710

- 리액트 모듈형 강의 함수형 프로그래밍
  정처기 1회독을 하고 시험을 보기 위해선 이제 정말 봐야한다!!!

<br>

## 230709

- 노마드코더 ReactJS로 영화 웹서비스 만들기 완강
- 리액트 모듈형 강의 typescript<br>

  `git log` : 커밋 목록 확인<br>
  `git reset --hard 커밋 번호` : 그 커밋으로 가기<br>
  `// @ts-nocheck` : 애러 무시하고 일단 실행<br>

![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1127650004933296138/2023-07-09_6.17.24.png)

<br>

## 230708

- toss 코딩구현과제
- react todo list
  앞으로는 할거 다 하고 쉬어야겠다. 하다 놓기 금지!

<br>

## 230707

- 프로그래머스 수학, 배열
- 리액트 모듈형 강의 1(타입스크립트)
  타입스크립트 실행 환경 설정을 해봤다.
  타입스크립트 문법과 리액트에서 어떻게 사용하는지 익혀야겠다.

<br>

## 230706

- 프로그래머스 사칙연산, 배열, 수학
- 정처기 요구사항 확인
- 리액트 useEffects

<br>

## 230705

- 프로그래머스 사칙연산, 조건문, 배열
- 리액트 state, props
  <br>

  - state : 데이터가 저장되는 곳<br>
  - props : 부모 컴포넌트로부터 자식 컴포넌트에게 데이터를 보내는 방식<br>
  - 리액트가 아닌 경우, 일반 자바스크립트를 쓴 브라우저는 노드 정보가 바뀔 때 마다 노드 트리를 5단계에 걸쳐서 다시 생성<br>
    리액트의 경우, 가상돔을 써서 우리 시야에 보이는 부분만 수정해서 보여주고 모든 업뎃이 끝나면 일괄로 합쳐서 실제 돔에 던짐<br>
    프론트엔드는 렌더트리 단계를 얼마나 최적화하는가가 중요 !<br>
    <br>
  - React.useState() 함수 : 초기값 설정 [undifined, f] ([data, data 바꿀 때 사용하는 함수])<br>
    <br>
  - 구조 분헤 할당 : 배열이나 객체의 속성을 해체하여 그 값을 개별 **변수**에 담을 수 있게 하는 Javascript 표현식

    ```
    const box = ['pen', 'speaker','books'];
    const [a, b, c] = box
    ```

    <br>

  - 1. counter라는 데이터 받음
    2. return()에 그 데이터를 담고 있음 (사용자가 보게될 컴포넌트)
    3. 버튼이 클릭되면 counter값을 바꿔줄 함수 호출 -> setCounter
    4. counter의 새로운 값을 가지고 counter 함수를 호출
    5. 그 새로운 값은 setCounter(counter+1)에 써준 counter+1
    ```
    function App() {
      const [counter, setCounter] = React.useState(0);
      const onClick = () => {
        setCounter(counter + 1);
      }
      return (
        <div>
          <h3>
            Total Clicks: {counter}
          </h3>
          <button onClick={onClick}>
            Click me
          </button>
        </div>
      );
    }
    ReactDOM.createRoot(root).render(<App />);
    ```
    <br>

<br>

## 230704

- 프로그래머스 약수의 합
- 프리 온보딩 : MPA, SPA, CSR, Browser Rendering

<br>

## 230703

- 정처기 실기 : 소프트웨어 개발 방법론
- 리드미 작성

<br>

## 230702

- 프로젝트 JobGPT
  localStorage에 토큰 저장
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1125307310705758239/2023-07-03_3.09.21.png)

<br>

## 230701

- 프로젝트 JobGPT
  회원가입 status code error -> alert 메세지 및 라우팅
  회원가입 및 로그인 시 토큰을 어떻게 사용해야하는지 알아봐야겠다.
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1124627953431613502/2023-07-01_6.08.39.png)

<br>

## 230630

- 필수 : Jira , 자유 : 파이썬 싸피 스무고개
- 프로젝트 JobGPT
  api 연결하는 걸 아직 어떻게 해야하는지 모르겠다.
  내일 400 반환되면 로그인 할 수 없게 알림 띄우기, chatlist delete api연결 시도

<br>

## 230629

- 필수 : 비동기, 자유 : 오픈소스 api, 파이썬 몽고db 크롤링
- 프로젝트 JobGPT 에러잡기
  fetch, async await, promise 등 여러 비동기방식의 차이점을 정확하게 이해하는 시간을 가져야겠다.
  파이썬과 몽고 db를 이용해서 서버를 실행시키는 것까지는 성공, 그 후 단계는 어떻게 진행되는지 모르겠어서 애를 먹고 있다.
  프로젝트에서 여러 에러가 터지다 보니 어떤 에러를 먼저 잡을지 우선순위를 생각하며 수정을 해야겠다.

<br>

## 230628

- 필수과제 : Next.js, TypeScript로 프로젝트 토대 만들기
- 프로젝트 JobGPT : 백엔드 Java 서버와 연결
  <table>
    <tr>
    <td valign="top">
        
    ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1123698308817358958/IMG_1011.jpg)
      
     </td>
    <td valign="top">

  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1123698309232599131/IMG_1010.jpg)
     </td>
    </tr>
  </table>

### 문제

h2를 이용해서 db를 받아오는데 USER를 포함한 몇 개만 없고 몇 개만 불러와짐

### 시도

url 앞을 localhost로 바꾸기
brew가 아닌 파일로 h2 다운로드
만들어진 db 파일 삭제

### 해결

db가 모두 받아와진 팀원 : 구버전 h2 / 아닌 팀원 : 최신 버전 h2
db 파일도 삭제 했다가 다시 넣어줘야 함

![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1123701996541706300/IMG_1012.jpg)

### 문제

10자 이상의 비밀번호를 적어야 성공인 로직을 짰는데 화면엔 8자 이상이라 적음

### 아쉬운 점

이해한 상태로 코드를 짰다 생각했는데 다시 확인 해봐야 겠다.
비밀번호가 실패일 때 비밀번호 확인 자체는 성공일 떄 각자 상태에 충실해버려 부자연스러움을 느꼈다.
1일 1잔디가 점점 지켜지지 않아서 디코에 매일 리뷰쓰는 걸 올리는 방안으로라도 잔디를 지키고 싶다.
마감이 다 와가고 백엔드와 통신 이제 시작인데 환경 설정하느라 시간을 많이 날렸다. 다음 프로젝트 떄는 통신을 일찍 시작하기 위해 프론트에서 할 수 있는 노력을 빠른 시일에 마무리 해야겠다.

<br>

## 230627

- 계절학기 필수과제 : 코딩 컨벤션 적용, 자유과제 : Collection 활용
- 알고리즘 1003 피보나치 함수
- JobGPT 프로젝트 소셜 로그인
  쿼리 스트링 형태를 인가 코드 자체로 만드는 것까지 완성.
  백엔드에 인가 코드를 전달하고 액세스 토큰을 받아와야 한다.
  백엔드에 보낼 주소를 모르겠어서 소통이 중요하다고 느꼈고 답장이 올 때까지 비워두고 만들고 있어야겠다.
  소셜 로그인은 로그인 / 회원 확인 및 가입 / 서비스 로그인 총 3단계.
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1123290889163395072/2023-06-28_1.36.51.png)
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1123290684963692735/2023-06-28_1.27.50.png)

<br>

## 230626

- 필수과제 02. 사용자 스토리
- 공통 PJT 팀 구성
- 프로젝트 JobGPT
  네이버 소셜 로그인 api를 가져와서 소셜 로그인을 시도할 수 있게 화면을 만들었다. 백엔드에서 토큰을 받아와서 인가를 하지 못하고 있다. 의존성 배열같은 개념 이해의 필요성을 느꼈다.
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1122948733789810739/2023-06-27_2.57.15.png)

<br>

## 230625

- 알고리즘 백준 듣보잡 : 정렬
- 프로젝트 소셜 로그인 구현이 어려워 우선 화면 구현을 했습니다.
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1122556576352448534/2023-06-26_12.58.48.png)
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767902/1122556831638749264/2023-06-26_12.59.58.png)

<br>

## 230624

- 알고리즘 백준 123더하기 : dp
- 리액트 강의 : 리액트 기초
  바닐라 자스와 리액트를 둘 다 사용하여 DOM에 렌더링 함으로써 리액트 함수가 어떻게 동작 하는지 배웠다.
  ![Alt text](https://cdn.discordapp.com/attachments/1061992590674767907/1122182699508043776/2023-06-25_12.13.12.png)

<br>

## 230516

### React js 활용 단어장

<br>

<img width="916" alt="230615" src="https://github.com/kanghaeven/Frontend_practice/assets/122589773/b762bfbd-1d34-4b62-ae95-e060714fae98">

<br>

| 순번 | 기능                                             |               진행도               |
| :--: | :----------------------------------------------- | :--------------------------------: |
|  1   | react-router-dom, useNavigate()로 라우터 구현    | ![](https://geps.dev/progress/100) |
|  2   | json-server<br>(모의 RESTful API 서버 생성 도구) | ![](https://geps.dev/progress/100) |
|  3   | 단어 뜻 보기 / 숨기기                            | ![](https://geps.dev/progress/100) |
|  4   | useEffect, fetch()로 API 호출                    | ![](https://geps.dev/progress/100) |
|  5   | PUT으로 checkbox 온 / 오프 수정                  | ![](https://geps.dev/progress/100) |
|  6   | DELETE로 단어 삭제                               | ![](https://geps.dev/progress/100) |
|  7   | POST로 단어 및 Day 생성                          | ![](https://geps.dev/progress/100) |
|  8   | 느린 인터넷 환경에서 Loading... Saving...        | ![](https://geps.dev/progress/100) |
