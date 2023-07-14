const http = require('http');
const fs = require('fs').promises;

// node로 서버 생성
const server = http.createServer(async (req, res) => {

  try {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 클라이언트에게 html 문서라는 것을 제공. (safari 같은 경우는 꼭 필요)
    // 1. 단순 html 마크업으로 정보 전달.
    // res.write('<h1>Hello Node!</h1>');
    // res.end('<p>Hello Lee!</p>');
    
    // 2. 파일 시스템 읽기로 정보 전달.
    const data = await fs.readFile('./server1.html');
    res.end(data);

  } catch (error) {

    console.error(error);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); 
    res.end(error.message);
    
  }

}).listen(8080);

// 서버 오픈 완료
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다.');
});

// 서버 에러 처리
server.on('error', (error) => {
  console.log(error);
});