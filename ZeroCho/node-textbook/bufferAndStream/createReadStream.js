const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // stream으로 가져오기

const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk); // chunk 데이터 삽입
  console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error', () => {
  console.log('error:', err);
});