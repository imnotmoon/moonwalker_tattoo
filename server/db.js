import Sequelize from "sequelize";

import { dbconfig } from "./db.config";

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST, 
  dialect: dbconfig.dialect,
  operatorAliases:false, 
  pool: {
    ...dbconfig.pool
  }});

export const db = { sequelize, Sequelize };


