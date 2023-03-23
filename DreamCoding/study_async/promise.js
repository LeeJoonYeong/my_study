'use strict';

// Producer.
const promise = new Promise((resolve, reject) => {
  // 무거운 일 (네트워크, 파일 읽기).
  console.log('일처리중..');
  setTimeout(() => {
    //resolve('lee');
    reject(new Error('네트워크 에러'));
  }, 2000);
});

// Consumers: then, catch, finally.
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => console.log('끝!!'));

// Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000);
    });
  })
  .then(num => console.log(num));