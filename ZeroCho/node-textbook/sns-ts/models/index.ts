import Sequelize from 'sequelize';
import configObj from '../config/config';
import User from '../models/user';
import Post from '../models/post';
import Hashtag from '../models/hashtag';

const env = process.env.NODE_ENV as 'production' | 'test' || 'development';
const config = configObj[env];
const sequelize = new Sequelize.Sequelize(config.database, config.username, config.password, config);

User.initiate(sequelize);
Post.initiate(sequelize);
Hashtag.initiate(sequelize);

User.associate();
Post.associate();
Hashtag.associate();

export { User, Post, Hashtag, sequelize };