// const fs = require('fs'); // 일반적인 객체 가져오기.
const fs = require('fs').promises; // promise 객체로 가져온다. 대부분 promise로 많이 쓴다.

// 파일 쓰기
// fs.writeFile('./writeme.txt', '글이 입력됩니다.')
//   .then((data) => {
//   })
//   .catch((err) => {
//     throw err;
//   });
  
// promise chaining으로 파일 쓰기와 동시에 읽기
fs.writeFile('./writeme.txt', '글이 입력됩니다.2')
  .then((data) => {
    return fs.readFile('./readme.txt');
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
 