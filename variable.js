
// 1. 스트릭 모드로 개발.
'use strict';

// 2. variable
// let *******
// var 쓰지마!! var hoisting : move declaration from to bottom. block scope 영향 안받아!!

// global scope
// { block scope }

// 3. constance
// 값을 선언함과 동시에 할당한 뒤로는 변경x. immutable data type (<-> mutable data type. 계속 변경 가능 : let )
// securiy / thread safety / reduce human mistake

// 4. variable type
// primitive : 더 이상 작은 단위로 나눠질 수 없는 한가지 아이템. single item : number, string, boolean, null, undefiedn, symbol.
// object : 싱글 아이템을 하나로 묶어서 박스로 관리. box container
// function. first-class function : 변수에 할당 가능. 함수의 파라미터(인자)로 전달 가능. 함수에서 리턴 가능.

// === number
const count = 17; /* integer 정수 */
const size = 17.1; /* decimal number 소수 */
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// special numeric value
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// === string
const name = 'brendan';
const greeting = 'hello ' + name;
console.log(`value: ${greeting}, type:${typeof greeting}`);

const helloBob = `hi ${name}!`; /* template literals */
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type:' + typeof helloBob);

// === boolean
// false : 0, null, undefined, NaN, ''
//  true : any other value
const canRead = true;
const test = 3 < 1; /* false */
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// var 
// :: 재선언이 가능한 변수
// :: 사용 가능한 범위 - function

// let 
// :: 재선언이 불가능한 변수
// :: 사용 가능한 범위 - {모든 중괄호 function, if문..}

// const 
// :: 재선언이 불가능한 변수 / 재할당이 불가능한 변수
// :: 사용 가능한 범위 - {모든 중괄호 function, if문..}







