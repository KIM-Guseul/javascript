'use strict';

// JavaScript is synchronous.
// Execute the code block by orger (= in order) after hoisting. 
// hoisting: var, function declaration : var, 함수 선언이 자동으로 젤 위로
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback : 동기적. 정해진 순서에 따라 코드 실행
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello')); // -> hoisting. 코드 가장 위에 있는걸로 인식.

// Asynchronous callback : 비동기적. 언제 코드가 실행될 지 예측X
function printWithDelay(print, timeout) {
  setTimeout(print, timeout); // browser API
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
