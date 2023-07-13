const url = require('url'); // node에 기본적으로 내장 되어있는 객체

const { URL } = url; // 이 url 객체를 이용하여 다양한 정보를 얻을 수 있다.

const myURL = new URL('https://www.softmill.co.kr/product/product_detail.php?onestep_id=23&twostep_id=100007&product_id=29#menu2'); // url 정보를 파싱해줌.

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL)); // 파싱된 url을 다시 정상적인 url 문자열로 합쳐준다.