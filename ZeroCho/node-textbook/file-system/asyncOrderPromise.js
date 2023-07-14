const fs = require('fs').promises;

// promise를 이용한 비동기식 파일 호출
async function main() {
  let data = await fs.readFile('./readme.txt');
  console.log('1번 ' + data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('2번 ' + data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('3번 ' + data.toString());
  data = await fs.readFile('./readme.txt');
  console.log('4번 ' + data.toString());
}

main();