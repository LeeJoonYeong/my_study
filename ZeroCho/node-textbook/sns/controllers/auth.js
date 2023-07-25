const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.join = async (req, res, next) => {
  const { nick, email, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email }});
    if (exUser) { // 이미 가입된 유저의 이메일 일 때
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12); // 비밀번호 암호화
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/'); // code: 302
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) { // 서버실패
      console.error(authError);
      return next(authError);
    }
    if (!user) { // 로직실패
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => { // 로그인 성공
      if (loginError) { // 로그인 과정에서의 혹시 모를 에러
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};

exports.logout = (req, res, next) => {
  req.logout(() => {
    res.redirect('/');
  });
};