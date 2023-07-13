const path = require('path'); // node에 기본적으로 내장 되어있는 객체

// console.log(path); // 이 path 객체를 다양한 함수를 이용하여 활용할 수 있다.

console.log(path.join(__dirname, 'commonJS-module', 'var.js')); // 활용 1 : 운영체제마다 파일 경로 표현문자가 조금씩 다르기 때문에 이 함수를 이용하여 각 운영체제에 맞는 경로 문자열을 구할 수 있다.

const string = __filename;

console.log('path.dirname():', path.dirname(string)); // 활용 2 : 해당 파일의 폴더 경로 얻기.
console.log('path.extname():', path.extname(string)); // 활용 3 : 해당 파일의 확장자 명 얻기.
console.log('path.basename():', path.basename(string)); // 활용 4 : 해당 파일의 풀 네임 얻기.
console.log('path.parse():', path.parse(string)); // 활용 5 : 해당 파일정보를 파싱해줌.