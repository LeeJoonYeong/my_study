const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      provider: {
        type: Sequelize.ENUM('local', 'kakao'),
        allowNull: false,
        defaultValue: 'local'
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true, // createdAt, updatedAt
      underscored: false,
      modelName: 'User', // 자바스크립트에서 쓰는 이름
      tableName: 'users', // 데이터베이스에서 쓰는 테이블 이름 // soft delete
      paranoid: true, // deletedAt 유저 삭제일
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.User, { // 팔로워
      foreignKey: 'followingId',
      as: 'Followers',
      through: 'Follow'
    });
    db.User.belongsToMany(db.User, { // 팔로잉
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow'
    });

  }
}

module.exports = User;