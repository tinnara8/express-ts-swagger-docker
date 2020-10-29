// import * as Sequelize from 'sequelize'
import { Sequelize } from 'sequelize';

const db = 'postgres';
const username = 'postgres';
const password = '112113114';

export const sequelize = new Sequelize(db, username, password, {
  dialect: 'postgres',
  port: 3306,
});

sequelize.authenticate();
