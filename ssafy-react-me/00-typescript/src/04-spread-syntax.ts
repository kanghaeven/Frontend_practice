// --------------------------------------------------------------------------
// spread syntax

function run() {
  combineArray();
  combineObject();
}

function combineArray() {
  const numberList: number[] = [2, -2, 1]; // Array<number> , number[]
  const countList: Array<number> = [101, 201, 301];
  let combineList: number[] = countList
    .slice(0, 2)
    .concat(numberList)
    .concat(countList.slice(2));

  // 배열 복제
  // slice, map, forEach, filter, ...
  // 배열 push, pop, sort, ...
  combineList = [
    ...countList.slice(0, 2),
    ...numberList,
    countList[countList.length - 1],
    ...countList.slice(2),
  ];

  // [ 101, 201, 2, -2, 1, 301 ]
  console.log(combineList);
  // [ 101, 201, 2, -2, 1, 301, 301 ]
}

// custom type vs. interface
// react에서는 기본적으로 interface 사용 / interface로 할 수 없는 경우에 custom type으로 type 지정
interface Options {
  // optional
  // startIndex?: number;
  // required
  startIndex: number;
  loop: boolean;
  usingAria?: boolean;
}

function combineObject() {
  const defaultOptions: Options = {
    startIndex: 0,
    loop: false,
    usingAria: true,
  };

  const customOptions: Partial<Options> = {
    loop: true,
    usingAria: false,
  };

  let combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);
  combineOptions = { ...defaultOptions, ...customOptions };
  console.log(combineOptions);
}

run();
