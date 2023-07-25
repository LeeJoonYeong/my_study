const Sequelize = require('sequelize');

class Hashtag extends Sequelize.Model {
  static initiate(sequelize) {
    Hashtag.init({
      title: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      }
    }, {
      sequelize,
      timestamps: true, // createdAt, updatedAt
      underscored: false,
      modelName: 'Hashtag', // 자바스크립트에서 쓰는 이름
      tableName: 'hashtags', // 데이터베이스에서 쓰는 테이블 이름 // soft delete
      paranoid: false, // deletedAt 유저 삭제일
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Hashtag.belongsToMany(db.Post, { 
      through: 'PostHashtag'
    });
  }
}

module.exports = Hashtag;