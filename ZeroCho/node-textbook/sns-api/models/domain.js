const Sequelize = require('sequelize');

class Domain extends Sequelize.Model {
  static initiate(sequelize) {
    Domain.init({
      host: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('free', 'premium'),
        allowNull: false,
      },
      clientSecret: {
        type: Sequelize.UUID,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: true, // createdAt, updatedAt
      paranoid: true, // deletedAt 유저 삭제일
      modelName: 'Domain', // 자바스크립트에서 쓰는 이름
      tableName: 'domains', // 데이터베이스에서 쓰는 테이블 이름 // soft delete
    });
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
}

module.exports = Domain;