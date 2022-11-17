# JS

자바스크립트가 프론트엔드로 쓸 수 있는 유일한 언어 / 백엔드까지 자바스크립트로 만들수있음

react : 자바스크립트만으로 안드로이드 / ios 앱을 만들수 있게 해줌
electron : 자바스크립트, html, css로 데스크탑 앱을 만들수 있게 해줌

호이스팅 : 변수나 함수를 스코프 상단으로 끌어올리는 것으로 버그의 원인이 될 수 있음

## 브라우저에서 JS 사용법

인터넷 관리자모드 > console에서 사용 (브라우저에는 JS가 깔려있음)

const; = 상수로 값이 바뀔수 없음
let; = 값을 업데이트 할 수 있음 (변수를 만들어 줄 때 let을 붙이는 게 일반적인 방법)
colsole.log();
boolean true(켜져있음) / false(꺼져있음);
null : 아무것도 없음(값이 비어있음) false(값이 있음)와 다름
undefined : 값이 정의되지않음(공간은 있는데 값이 정의되지않음)
prompt : 사용자에게 창을 띄울 수 있게 해줌 (string값 , def`au`lt값) 2개를 받을수 있음 / 안쓰는 이유 message가 별로 안이쁘고 css적용 불가
typeof : 값의 type을 보는 방법
parseInt() : string을 number 값으로 변환
isNaN() : boolean값 으로 return함 / number인지 아닌지 알려줌 false 일 경우 숫자
querySelector = element를 css방식으로 검색할 수 있음 (첫번째 element값만 가져옴)
querySelectorAll = 조건의 부합하는 element값을 다 가져옴

## 배열

무언가를 나열하기 위해서 배열인 array 사용
배열 사용시

1. []사용
2. 괄호안 구분은 ,로 구분
3. 배열안 값추가 = 배열값.push(추가할 값);
4. 배열 값 수정 = 배열이름[위치] = "변경할 값";

## object

propery 값을 저장해줌

ex)

```js
const player = {
  name: 'player1',
  points: 10,
  fat: true,
};
```

1. {}사용
2. 괄호안 구분은 ,로 구분
3. 값을 바꿀경우 player.fat = false; 같은걸로 값을 변경 할 수 있음(값을 추가할경우도 같음)

## function

function은 계속 반복해서 사용 할 수 있는 코드 조각

```js
function sayHello(매개변수) {
  console.log('Hello!');
}

sayHello();

// function에 값보내기
function plus(a, b) {
  consol.log(a + b);
}

plus(8, 10);
```

함수는 입력, 출력이 없을 수 있음 (코드를 묶어줄때 사용하기도 함)

```js
function fly() {
  openWings();
  while (true) {
    moveWings();
  }
}

fly();
```

```js
/// 일반적인 함수
function add(x, y) {
  let temp = x + y;
  return temp;
}

/// 화살표 함수
add = (x, y) => {
  let temp = x + y;
  return temp;
};

///익명함수
((x, y) => {
  return x + y;
})(1, 2);
```

## return

function이 function의 밖과 소통하기 위한 수단
어느 작업을 하고 그 작업의 결과를 알려주는 function을 위할때 사용하는 수단

```js
const age = 96;
const krAge = calculateKrAge(age);
function calculateKrAge(ageofForeigner) {
  return ageofForeigner + 2;
}

console.log(krAge);
```

## conditionals(조건문)

if else문 중점으로 사용

## 반복문

반복되는 코딩이 있을경우 반복문 사용으로 코드를 줄일 수 있다.

for 문

```js
for (let i = 0; i < 11; i++) {
  console.log('나무 찍기 ' + i + ' 번');
}

myArray = [1, 2, 3, 4, 5];

myArray.forEach((element) => {
  console.log('나무 찍기' + element);
});
```
