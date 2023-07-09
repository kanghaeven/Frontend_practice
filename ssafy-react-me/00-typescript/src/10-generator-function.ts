// --------------------------------------------------------------------------
// generator function → Generator { next }

// 아래 함수는 피보나치 수열 중 특정 인덱스를 반환합니다.
const fibonacci = (n: number = 0): number =>
  n < 1 ? 0 : n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

let i = 0;
while (i < 10) {
  console.log(fibonacci(i));
  i += 1;
}

// [Q]
// 피보나치의 특정 수를 도출하는 것이 아니라,
// 피보나치 수열의 각 값을 배열로 나열하려면 어떻게 해야 할까요?

// [A]
// 피보나치 수열을 배열로 반환하는 fibonacciGenerator 함수를 작성합니다.
// 그리고 피보나치 수열의 값을 배열로 만들어 Console 출력해봅니다.

function fibonacciMaker(n: number = 0): number[] {
  const makedFibo: number[] = [];

  for (let i = 0; i < n; i++) {
    makedFibo[i] = fibonacci(i);
  }

  return makedFibo;
}

// console.log("fibonacciMaker\n", fibonacciMaker(8));
// fibonacciMaker
//  [ 0, 1, 1,  2, 3, 5, 8, 13 ]

function* fibonacciGenerator(n = 0) {
  let [current, next] = [0, 1]; // 현재 값과 다음 값 변수 선언 및 초기화

  while (n--) {
    // n이 0이 될 때까지 반복
    yield current; // 현재 값 반환
    [current, next] = [next, current + next]; // 다음 값 계산 및 변수 갱신
  }
}

const fibo8 = fibonacciGenerator(8); // fibonacciGenerator 호출하여 Iterator 생성
console.log("fibonacciGenerator(8)\n", [...fibo8]); // Iterator를 배열로 변환하여 출력
// fibonacciGenerator(8)
//  [ 0, 1, 1,  2, 3, 5, 8, 13]

const fibo20 = fibonacciGenerator(20);
console.log("fibonacciGenerator(20)\n", [...fibo20]);
// fibonacciGenerator(20)
//  [
//     0,   1,    1,    2,    3,
//     5,   8,   13,   21,   34,
//    55,  89,  144,  233,  377,
//   610, 987, 1597, 2584, 4181
// ]
