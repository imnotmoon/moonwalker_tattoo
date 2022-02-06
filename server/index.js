import express from 'express';
import cors from 'cors';
import path from 'path';
import Sequelize from 'sequelize';

import { graphqlHTTP } from 'express-graphql';

import * as gqlTypes from './schema.js';
import { dbConfig } from './db.config.js';

import POST from './models/POST.js';
import NOTICE from './models/NOTICE.js';
import PHOTO from './models/PHOTO.js';
import REVIEW from './models/REVIEW.js';

const PORT = 8000;
const app = express();

app.use(cors());

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
  } catch {
    console.log('error connecting');
  }
})();

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
