import express from 'express';
import path from 'path';
import mysql from 'mysql2';
import dotenv from 'donenv';
dotenv.config();

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
})

app.use(
  '/api',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log('Moonwalker server has started on port', PORT);
});
