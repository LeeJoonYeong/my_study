// const fs = require('fs'); // 일반적인 객체 가져오기.
const fs = require('fs').promises; // promise 객체로 가져온다. 대부분 promise로 많이 쓴다.

// 파일 읽기
fs.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString()); 
  })
  .catch((err) => {
    throw err;
  });
 