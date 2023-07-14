const fs = require('fs');
const writeStream = fs.createWriteStream('./writeme2.txt'); // stream으로 가져오기

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();