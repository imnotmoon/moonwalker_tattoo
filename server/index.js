import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import Sequelize from 'sequelize';
import { config } from 'dotenv';
config();

import { graphqlHTTP } from 'express-graphql';

import * as gqlTypes from './schema.js';
import { dbConfig } from './db.config.js';

import POST from './models/POST.js';
import NOTICE from './models/NOTICE.js';
import PHOTO from './models/PHOTO.js';
import REVIEW from './models/REVIEW.js';

const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.post('/api/auth', (req, res, next) => {
  const { ID, password } = req.body;
  if (ID === ADMIN_ID && password === ADMIN_PASSWORD) {
    return res
      .cookie('auth', true, {
        maxAge: 60 * 60 * 1000,
      })
      .send();
  }
  return res.status(400).send();
});

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    ...dbConfig.pool,
  },
});

export const db = {};
db.REVIEW = REVIEW(sequelize, Sequelize);
db.POST = POST(sequelize, Sequelize);
db.NOTICE = NOTICE(sequelize, Sequelize);
db.PHOTO = PHOTO(sequelize, Sequelize);

(async function () {
  try {
    await sequelize.authenticate();
    console.log('connected');

    app.use(
      '/api',
      graphqlHTTP({
        schema: gqlTypes.schema,
        query: gqlTypes.Query,
        graphiql: true,
      })
    );

    app.listen(PORT, () => {
      console.log('Moonwalker server has started on port', PORT);
    });
  } catch {
    console.log('error connecting');
  }
})();
