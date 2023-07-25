import express, { ErrorRequestHandler, RequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import passport from 'passport';
import { sequelize } from './models';

dotenv.config(); // .env파일 안의 값들이 process.env 객체로 들어가게하는 함수.
import pageRouter from './routes/page';
import authRouter from './routes/auth';
import postRouter from './routes/post';
import userRouter from './routes/user';
import passportConfig from './passport';

const app = express();
passportConfig();
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});
sequelize.sync()
  .then(() => {
    console.log('데이터베이스 연결 성공')
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET!,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize()); // 반드시 session 설정 밑에 호출해야 한다. // req.user, req.login, req.isAuthenticate, req.logout이 생긴다.
app.use(passport.session()); // connect.sid라는 이름으로 세션 쿠키가 브라우저로 전송.

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((req, res, next) => { // 404 NOT FOUND
  const error = new Error(`${req.method} ${req.url}`);
  error.status = 404;
  next(error);
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
}

app.use(errorHandler);

export default app;