const User = require("../models/user");
const { follow } = require("../services/user");

exports.follow = async (req, res, next) => {
  // req.user.id req.params.id
  try {
    const result = await follow(req.user.id, req.params.id);
    if (result === 'ok') {
      res.send('success');
    } else if (result === 'no user') {
      res.status(404).send('no user');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// note.
// 컨트롤러(controller)는 요청과 응답만 처리해준다.