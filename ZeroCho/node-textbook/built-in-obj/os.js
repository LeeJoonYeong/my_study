const os = require('os'); // node에 기본적으로 내장 되어있는 객체

// console.log(os); // 이 os 객체를 이용하여 다양한 정보를 얻을 수 있다.

console.log(os.cpus());
console.log(os.arch());
console.log(os.type());
console.log(os.hostname());
console.log(os.release());
console.log(os.freemem());
console.log(os.totalmem());