const util = require('util'); // node에 기본적으로 내장 되어있는 객체
const crypto = require('crypto');

// 함수를 지우지 않고 쓰되, 더 이상 사용하지 않는걸 권장하기 위해 쓰이는 util 함수.
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

// 콜백함수를 promise로 만들어 주는 util 함수.
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });