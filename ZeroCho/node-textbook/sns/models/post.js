const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
  static initiate(sequelize) {
    Post.init({
      content: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true, // createdAt, updatedAt
      underscored: false,
      modelName: 'Post', // 자바스크립트에서 쓰는 이름
      tableName: 'posts', // 데이터베이스에서 쓰는 테이블 이름 // soft delete
      paranoid: false, // deletedAt 유저 삭제일
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { 
      through: 'PostHashtag'
    });
  }
}

module.exports = Post;