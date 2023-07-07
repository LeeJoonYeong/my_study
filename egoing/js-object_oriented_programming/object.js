'use strict';

const obj = {
  name: 'lee',
  age: 29,
  job: 'developer',
};

console.group('object delete');
delete obj.age; // 객체 해당 요소 삭제

console.log(obj);
console.groupEnd('object delete');