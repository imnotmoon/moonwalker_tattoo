import Graphql from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

export const dateValue = (value) => {
  const date = new Date(value);
  if (date.toString().toLowerCase() === 'invalid date') return null;
  return date;
};

const typeDefs = /* GraphQL */ `
  type Query {
    viewer: Post!
  }

  type Image {
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
    images: [Image!]
  }

  type Review {
    id: ID!
    title: String!
    content: String
    upload_date: String
    images: [Image!]
  }
`

const QUERY = /* GraphQL */ `
  
`

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {

    }
  }
})