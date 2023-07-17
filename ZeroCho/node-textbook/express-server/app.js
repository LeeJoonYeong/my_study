const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs');
const app = express();


// 서버에 속성(변수)을 심는 함수
app.set('port', process.env.PORT || 3000);

// 템플릿 엔진 설정하기
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // ex : pug, other : nunjucks

// morgan : 요청과 응답을 기록해주는 미들웨어
app.use(morgan('dev')); // dev는 보통 개발할 때 많이 쓰인다.
// app.use(morgan('combined')); // dev보다는 조금 더 자세한 log가 나옴.

// static 파일 허용 미들웨어
// 선언 법 : app.use('요청 경로', express.static(__dirname, '실제 경로'));
// 요청 url 경로 ex : localhost:3000/hello.css
// 실제 폴더 경로 ex : express-server/public/hello.css
app.use('/', express.static(path.join(__dirname, 'public'))); // 일반적인 방법
// app.use('/', (req, res, next) => { // 미들웨어 확장법 (알아두면 편리함)
//   if (req.session.id) {
//     express.static(path.join(__dirname, 'public')(req, res, next)
//   } else {
//     next();
//   }
// });

// cookie-parser 쿠키를 더 유연하게 다룰 수 있게 해주는 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));

// session
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET, // 쿠키 암호화
  cookie: { // 세션 쿠키 옵션
    httpOnly: true, // 자바스크립트를 사용한 해킹 방지
  },
}));

// express에 내장되어 있는 body-parser.
// 거의 express에서는 필수 장착 미들웨어
app.use(express.json()); // json 파일 요청이 들어오면 파싱해주는 함수.
app.use(express.urlencoded({ // 클라이언트에서 form 데이터를 파싱해주는 함수.
  extended: true,
}));

// app.use에 장착한 미들웨어는 모든 경로에서 실행한다.
// next 함수를 실행해줘야 다음 일치하는 미들웨어를 찾아갈 수 있다.
app.use((req, res, next) => {
  console.log('모든 요청에 실행하고 싶어요.');

  req.data = '이것은 나의 개인 비밀번호'; // 라우터들끼리 공유할 데이터 변수

  next(); 
}, (req, res, next) => {
  console.log('이어서 저도 실행되고 싶어요.');
  next();
}, (req, res, next) => {

  // 에러 넘겨주기
  try {
    // console.log(errorerror); // 에러 발생 시도 코드
    next();
  } catch (error) {
    next(error); // next(error)로 하면 에러처리 미들웨어로 바로 넘어간다.
  }

});

app.get('/', (req, res) => {

  console.log('password:', req.data); // 공유되고 있는 데이터 변수 확인해보기

  // 쿠키 만들기
  req.cookies;
  res.cookie('name', encodeURIComponent('LEEJOONYEONG'), {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  });

  // 쿠키 지우기
  // res.clearCookie('name', encodeURIComponent('준영'), {
  //   httpOnly: true,
  //   path: '/',
  // });

  // Tip. path 패키지를 이용하여 경로 설정을 좀 더 확실하게 해준다.
  // res.json({ name: "lee" }); json으로 서빙
  // res.send('hello lee'); // 일반적인 서빙
  res.sendFile(path.join(__dirname, 'index.html')); // 파일 자체를 서빙

});

app.get('/about', (req, res) => {
  res.send('joon yeong');
});

// 라우트 매개변수
app.get('/category/:name', (req, res) => {
  res.send(`category -> ${req.params.name}`);
});

// 404 에러 처리 미들웨어
app.use((req, res, next) => {
  // status(404)은 네트워크 상태에 따라 필요시 넣어주면 된다.
  res.status(404).send('없는 페이지 입니다.');
});

// 에러 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러 발생!!');
});

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});