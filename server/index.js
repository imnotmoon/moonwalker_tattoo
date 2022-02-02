import express from 'express';
import cors from 'cors';
import path from 'path';

import { graphqlHTTP } from 'express-graphql';
import Graphql from 'graphql';

import * as gqlTypes from './schema.js';

const PORT = 8000;
const schema = new Graphql.GraphQLSchema({ query: gqlTypes.queryType });
const app = express();

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
