// @ts-check

// --------------------------------------------------------------------------
// operators (nullish, optional chaining)

function run() {
  nullish();
  optionalChaining();
}

function nullish() {
  let value = 0; // false

  let result = value || 100;
  console.log("|| : ", result);
  // || :  100

  function isNullOrUndefined(value: unknown) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log("isNullOrUndefined : ", result);
  // isNullOrUndefined :  0

  // 코드를 작성합니다.
  // null 병합 연산자 활용
  result = value ?? 100;
  console.log("nullish : ", result);
  // nullish :  0
}

// 사용자 정의 타입
type Topic = {
  _title: string;
  getTitle(): string;
  setTitle(value: string): void;
  getName?: () => string; // function | undefined
};

function optionalChaining() {
  const topic: Topic = {
    _title: "매년 업데이트 되는 ECMAScript",
    getTitle() {
      return this._title;
    },
    setTitle(value) {
      this._title = value;
    },
  };

  if (topic && typeof topic === "object" && !Array.isArray(topic)) {
    let title, name;
    if (typeof topic.getTitle === "function") {
      title = topic.getTitle();
    }
    // if (typeof topic.getName === "function") {
    //   name = topic.getName();
    // }
    console.log("typeof : ", title);
    console.log("typeof : ", name);

    // 코드를 작성합니다.
    name = topic.getName?.();
  }

  let title, name;
}

run();
