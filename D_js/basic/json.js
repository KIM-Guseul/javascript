'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// array -> json
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object -> json
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  symbol: Symbol('id'), //js에 자체로 들어있는 데이터 -> json X
  jump: function () { //함수는 object에 있는 데이터 X -> json X
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); 
//배열에 원하는 프로퍼티만 골라서 정의 -> 걔네만 json으로 변환
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { //callback함수로 더 세밀하게 통제
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //함수는 json으로 변환 X.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // string.
