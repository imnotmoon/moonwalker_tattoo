import express from 'express';
import cors from 'cros';
import path from 'path';
import mysql from 'mysql2';

import { graphqlHTTP } from 'express-graphql';
import Graphql from 'graphql';

import * as gqlTypes from './schema.js';

const PORT = 8000;
const schema = new Graphql.GraphQLSchema({ query: gqlTypes.queryType });
const app = express();

const connection = mysql.createConnection({
  host: process.DATABASE_HOST,
  user: process.DATABASE_USERNAME,
  password: process.DATABASE_PASSWORD,
  database: process.DATABASE_DBNAME,
  port: process.DATABASE_PORT
});

app.use(cors());

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
