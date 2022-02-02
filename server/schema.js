import Graphql from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema'

const dateValue = (value) => {
  const date = new Date(value);
  if (date.toString().toLowerCase() === 'invalid date') return null;
  return date;
};

const typeDefs = /* GraphQL */ `
  type Query {
    reviews: [Review]
    photos: [Photo]
    posts: [Post]
    notices: [Notice]
  }

  type Photo {
    id: ID!
    post_id: Int!
    review_id: Int!
    name: String!
    path: String!
    order: Int
  }

  type Notice {
    id: ID!
    title: String!
    content: String
    upload_date: String
  }

  type Post {
    id: ID!
    title: String!
    content: String
    upload_date: String
    photos: [Photo!]
  }

  type Review {
    id: ID!
    title: String!
    content: String
    upload_date: String
    photos: [Photo!]
  }
`

export const QUERY = /* GraphQL */ `
  query hello {
    viewer {
      title
      content
    }
  }
`

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      reviews: function(parent, args, context) {
        return [
          {id: 1, title: 'test', content: 'test', upload_date: '2022-02-02'},
          {id: 2, title: 'test2', content: 'test2', upload_date: '2022-02-02'},
          {id: 3, title: 'test3', content: 'test3', upload_date: '2022-02-02'}
        ];
      },
      posts: function(parent, args, context) {
        return [{id: 1, title: 'test', content: 'test', upload_date: '2022-02-02'}];
      },
      notices: function(parent, args, context) {
        return [{id: 1, title: 'test', content: 'test', upload_date: '2022-02-02'}];
      },
      photos: function(parent, args, context) {
        return [{ id: 1, name: 'test', path: 'test/test', order: 1}];
      },
    },
  }
})