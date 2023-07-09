// --------------------------------------------------------------------------
// iterable → iterator
//
// 이터러블 프로토콜(iterable protocol) 조건
// - iterable[Symbol.iterator] 메서드를 가진 객체
//
// 이터레이션 프로토콜(iterator protocol) 조건
// - next 메서드를 가진 객체
// - next 메서드를 실행하면 { done: boolean, value: any } 반환
// - done 값이 false 인 경우 다음 순환 가능 value 반환
// - done 값이 true 인 경우 다음 순환 없음 value는 undefined
// --------------------------------------------------------------------------

// 내장된 String Iterable
let iterable = "나 커피 사줘";

// Iterable 조건은 [Symbol.iterator] 메서드를 가짐
// console.log(typeof iterable[Symbol.iterator]);
// function

// Iterable의 [Symbol.iterator] 메서드를 실행하면 Iterator 반환
const iterator = iterable[Symbol.iterator]();

// Iterator 조건은 next 메서드를 가짐
// console.log(typeof iterator.next);
// function

// Iterator의 next 메서드가 실행되면 { done, value } 반환
// done 값이 true인 경우 순환 종료
for (let i = 0; i <= iterable.length; i++) {
  // console.log(iterator.next());
}
// { value: "나", done: false }
// { value: " ", done: false }
// { value: "커", done: false }
// { value: "피", done: false }
// { value: " ", done: false }
// { value: "사", done: false }
// { value: "줘", done: false }
// { value: undefined, done: true }

// --------------------------------------------------------------------------
// for ~ of 문
//
// - 이터러블을 순환해 이터레이터 값을 추출해 사용할 수 있습니다.
// - 예시 코드를 여기에 작성합니다.

for (const iteratorValue of iterable) {
  // console.log(iteratorValue);
}
// 나

// 커
// 피

// 사
// 줘

// --------------------------------------------------------------------------
// 이터러블과 전개 연산자
//
// - 배열 내부에 이터러블을 전개하면 이터레이터 값을 나열할 수 있습니다.
// - 예시 코드를 여기에 작성합니다.

// console.log([...iterable]);
// ["나", " ", "커", "피", " ", "사", "줘"];

// --------------------------------------------------------------------------
// 내장된 이터러블
//
// - String
// - Array
// - Set
// - Map

// Array
const coffee = ["espresso", "americano", "latte", "cappuccino"];
// console.log(typeof coffee[Symbol.iterator]);
// function

// Set
const coffeeTypes = new Set([
  ...coffee,
  ...["robusta", "liberica", "arabica"],
  ...coffee,
]);

// console.log(coffeeTypes);
// Set(7) {
//   "espresso",
//   "americano",
//   "latte",
//   "cappuccino",
//   "robusta",
//   "liberica",
//   "arabica"
// }
// console.log(coffeeTypes[Symbol.iterator]);
// [Function: values]
// console.log(Array.isArray([...coffeeTypes]));
// true

// Map
let primaryColor = "#fa5252";
const cssEntries = Object.entries({
  display: "flex",
  flexFlow: "row nowrap",
  gap: "20px",
  margin: "0 auto",
  border: `2px solid ${primaryColor}`,
  padding: "2em",
  color: `${primaryColor}`,
  background: "transparent",
  fontSize: "14px",
});

const cssMap = new Map(cssEntries);
// console.log(cssMap);
// Map(9) {
//   "display" => "flex",
//   "flexFlow" => "row nowrap",
//   "gap" => "20px",
//   "margin" => "0 auto",
//   "border" => "2px solid #fa5252",
//   "padding" => "2em",
//   "color" => "#fa5252",
//   "background" => "transparent",
//   "fontSize" => "14px"
// }

// for ~ of 문을 사용해 이터러블인 cssMap을 순환하여 key, value를 출력해봅니다.
// - 예시 코드를 여기에 작성합니다.

// for (const [key, value] of cssMap) {
//   console.log({ key, value });
// }
// { key: "display", value: "flex" }
// { key: "flexFlow", value: "row nowrap" }
// { key: "gap", value: "20px" }
// { key: "margin", value: "0 auto" }
// { key: "border", value: "2px solid #fa5252" }
// { key: "padding", value: "2em" }
// { key: "color", value: "#fa5252" }
// { key: "background", value: "transparent" }
// { key: "fontSize", value: "14px" }

// --------------------------------------------------------------------------
// 커스텀 이터러블
//
// - [Symbol.iterator] 메서드를 가진 객체
// - [Symbol.iterator] 메서드는 next 메서드를 가진 객체를 반환
// - next 메서드가 실행되면 { done, value } 객체 반환

const customIterable = {
  _i: 0, // 시작 인덱스를 나타내는 변수
  _distance: 1, // 각 반복마다 값이 증가하는 거리를 나타내는 변수
  _max: 100, // 반복이 종료될 최대 인덱스를 나타내는 변수

  [Symbol.iterator]() {
    // Symbol.iterator 메서드를 정의하여 Iterable 객체로 만듦
    let { _i: i, _distance: distance, _max: max } = this; // 객체 내의 변수들을 추출하여 사용

    return {
      next() {
        if (i < max) {
          // 현재 인덱스가 최대 인덱스보다 작을 경우
          const returnValue = {
            // 반환할 값의 객체 생성
            done: false, // 반복이 완료되지 않았음을 나타내는 속성
            value: i, // 현재 인덱스의 값을 나타내는 속성
          };
          i += distance; // 인덱스를 증가시킴
          return returnValue; // 반환할 값을 가지고 있는 객체 반환
        } else {
          return {
            // 현재 인덱스가 최대 인덱스 이상일 경우
            done: true, // 반복이 완료되었음을 나타내는 속성
            value: undefined, // 반환할 값이 없음을 나타내는 속성
          };
        }
      },
    };
  },
};

// customIterable 이터러블의 값을 나열한 배열을 작성한 후 Console에 출력합니다.
// - 예시 코드를 여기에 작성합니다.

// console.log([...customIterable]);
// [
//   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//  96, 97, 98, 99
// ]

// for ~ of 문을 사용해 customIterable 이터러블을 순환해 값을 Console에 출력합니다.
// - 예시 코드를 여기에 작성합니다.

// for (const value of customIterable) {
//   console.log(value);
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50
// 51
// 52
// 53
// 54
// 55
// 56
// 57
// 58
// 59
// 60
// 61
// 62
// 63
// 64
// 65
// 66
// 67
// 68
// 69
// 70
// 71
// 72
// 73
// 74
// 75
// 76
// 77
// 78
// 79
// 80
// 81
// 82
// 83
// 84
// 85
// 86
// 87
// 88
// 89
// 90
// 91
// 92
// 93
// 94
// 95
// 96
// 97
// 98
// 99
