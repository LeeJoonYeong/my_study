const crypto = require('crypto'); // node에 기본적으로 내장 되어있는 객체

// 1. pbkdf2를 이용한 단방향 암호화
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64'); // salt : 직역은 '소금'이라는 의미이지만 암호화를 더 복잡하게 해주는 역할이다.
  console.log('salt:', salt);
  crypto.pbkdf2('123123', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});