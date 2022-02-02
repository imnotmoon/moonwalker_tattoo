import express from 'express';
import path from 'path';

import { graphqlHTTP } from 'express-graphql';
import Graphql from 'graphql';

const PORT = 8000;

const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date Type',
    serialize: (value) => {
      const date = new Date(value);
      if (date.toString().toLowerCase() === 'invalid date') return null;
      return date;
    },
  }),
};

const imageType = new Graphql.GraphQLObjectType({
  name: 'IMAGE',
  fields: {
    id: { type: Graphql.GraphQLID },
    post_id: { type: Graphql.GraphQLInt },
    review_id: { type: Graphql.GrpahQLInt },
    name: { type: Graphql.GraphQLString },
    path: { type: Graphql.GraphQLString },
    order: { type: Graphql.GraphQLInt },
  },
});

const noticeType = new Graphql.GraphQLObjectType({
  name: 'NOTICE',
  fields: {
    id: { type: Graphql.GraphQLInt },
    title: { type: Graphql.GraphQLString },
    content: { type: Graphql.GraphQLString },
    upload_date: { type: Graphql.GraphQLString },
  },
});

const postType = new Graphql.GraphQLObjectType({
  name: 'POST',
  fields: {
    id: { type: Graphql.GraphQLID },
    title: { type: Graphql.GraphQLString },
    content: { type: Graphql.GraphQLString },
    upload_date: { type: Graphql.GraphQLString },
  },
});

const reviewType = new Graphql.GraphQLObjectType({
  name: 'REVIEW',
  fields: {
    id: { type: Graphql.GraphQLID },
    title: { type: Graphql.GraphQLString },
    content: { type: Graphql.GraphQLString },
    upload_date: { type: Graphql.GraphQLString },
  },
});

const queryType = new Graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    review: {
      type: new Graphql.GraphQLList(reviewType),
      resolve: () => {
        return [{ id: 1, title: 'test', content: 'test', upload_date: '2022-02-02' }];
      },
    },
  },
});

const schema = new Graphql.GraphQLSchema({ query: queryType });

const app = express();

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
