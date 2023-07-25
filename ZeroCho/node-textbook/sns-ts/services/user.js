const User = require("../models/user");

exports.follow = async (userId, followingId) => {
  const user = await User.findOne({ where: { id: userId } });
  if (user) {
    await user.addFollowing(parseInt(followingId, 10));
    return 'ok';
  } else {
    return 'no user';
  }
};

// note.
// 서비스(services)는 핵심로직을 처리해준다.