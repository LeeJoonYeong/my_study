const { a, b } = require('./var');

console.log('a:', a, 'b:', b); // 모듈로 받아오기

require('./var');
console.log(require); // main과 cache 정도는 공부해서 알아보자.