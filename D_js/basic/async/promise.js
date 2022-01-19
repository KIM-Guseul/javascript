'use strict';

// Promise is a JavaScript object for asynchronous operation. 
// : 비동기 동작 실행 시 callback 대신 유용하게 쓸 수 있어.
// State: pending (promise가 생성돼서 operation이 수행중) -> fulfilled (operation 성공) or rejected (operation 오류/실패)
// Producer (promise object) vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
/*
 promise 함수 생성 되자마자 excutor 실행.
 : 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우 (버튼 클릭..) 불필요한 네트워크 통신 발생.
*/
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); //받아온 데이터를 resolve 콜백함수 통해서 전달
    // reject(new Error('no network')); // new Error -> js에서 제공하는 object. new Error('이유')
  }, 2000);
});


// 2. Consumers: then, catch, finally
promise
  .then(value => { //value = resolve()에서 전달된 'bead'
    console.log(value);
  }) // 성공
  .catch(error => {
    console.log(error);
  }) // 에러
  .finally(() => {
    console.log('finally');
  }); // 성공 여부 상관없이 마지막에 무조건 호출
  

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal))
// 받아오는 value를 바로 함수로 전달할 경우 -> 생략 가능.

getHen() //
  .then(getEgg) 
  .then(cook)
  .then(console.log)
  .catch(console.log);
  
