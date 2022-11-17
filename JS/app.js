// const a = 5;
// const b = 2;
// let myname = '이경섭';

// console.log(a+b);
// console.log(a/b);
// console.log(a*b);
// console.log(myname);

// const week = ['월', '화', '수', '목', '금', '토'];
// console.log(week);
// console.log(week[4]);
// week.push('일');
// console.log(week);

// const player ={
//     name: 'palyer',
//     fat : false,
//     points: 10,
// };

// console.log(player);
// console.log(player.name);
// player.lastName='potato';
// console.log(player);

 // function

// function sayHello(nameOfPerson,age){
//     console.log("Hello! my name is " + nameOfPerson + " and my age: " + age);
// }

// sayHello('nico', 10);
// sayHello('dal', 23);
// sayHello('lynn', 21);

// function plus(a,b){
//     console.log(a+b);
// }

// plus(8,60);

// function divide(a,b){
//     console.log(a/b);
// }

// divide(98,20);

// const user = {
//     name: 'nico',
//     hello: function (otherPersonsName) {
//         console.log('hello! ' + otherPersonsName);
//     },
// };

// console.log(user.name);
// user.hello('dal');

// const calculator = {
//     plus : function(a,b){
//         console.log(a+b);
//     },

//     minus : function(a,b){
//         console.log(a-b);
//     },

//     multiply : function(a,b){
//         console.log(a*b);
//     },

//     divide : function(a,b){
//         console.log(a/b);
//     },

//     power : function(a,b){
//         console.log(a ** b);
//     }
// }

// calculator.plus(1,1);
// calculator.minus(100,80);
// calculator.multiply(100,2);
// calculator.divide(10,2);
// calculator.power(100,2);

// return

// const age = 96;
// const krAge = calculateKrAge(age);
// function calculateKrAge(ageofForeigner){
//    return ageofForeigner + 2;
// }

// console.log(krAge);

// const calculator1 = {
//     plus1 : function(a,b){
//         return(a+b);
//     },

//     minus1 : function(a,b){
//         return(a-b);
//     },

//     multiply1 : function(a,b){
//         return(a*b);
//     },

//     divide1 : function(a,b){
//         return(a/b);
//     },

//     power1 : function(a,b){
//         return(a ** b);
//     }
// }

// const plusResult = calculator1.plus1(2,3);
// const minusResult = calculator1.minus1(plusResult,10);
// const multiplyResult = calculator1.multiply1(10,minusResult);
// const divideResult = calculator1.divide1(multiplyResult,plusResult);
// const powerResult = calculator1.power1(divideResult,minusResult);

// console.log(plusResult);
// console.log(minusResult);
// console.log(multiplyResult);
// console.log(divideResult);
// console.log(powerResult);

// if else

// const ageIf = parseInt(prompt("How old are you?"));

// if(isNaN(ageIf) || ageIf < 0){
//     console.log("나이를 적어주세요.");
//     }
// else if(ageIf < 20){
//     console.log("주류 구매가 가능합니다.");
// }
// else if(ageIf >= 20  && ageIf <= 50){
//     console.log("주류 구매가 가능합니다.");
//     }
// else if(ageIf > 50 && ageIf <= 80){
//     console.log("주류 구매가 가능하지만 줄여야합니다.");
// }
// else{
//     console.log("주류 구매가 가능하지만 권장 드리지 않습니다.");
// }

// html id 값 가져오가 & 수정

// const title = document.getElementById("maintitle");

// title.innerText="bye";

// console.log(title.id);
// console.log(title.className);

// html class값 가져오기
const title = document.querySelector(".hello h1");

function handleTitleClick(){
    console.log("title was clicked!");
}
title.addEventListener("click", handleTitleClick);
