import { makeExecutableSchema } from '@graphql-tools/schema';

import { db } from './index.js';

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
    post(id: ID): Post
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
`;

export const QUERY = /* GraphQL */ `
  query hello {
    viewer {
      title
      content
    }
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      reviews: async function (parent, args, context) {
        return await db.REVIEWS.findAll();
      },
      posts: async function (parent, args, context) {
        return await db.POST.findAll();
      },
      post: async function (parent, args, context) {
        const { id } = args;
        return await db.POST.findOne({ where: { id: id } });
      },
      notices: async function (parent, args, context) {
        return await db.NOTICE.findAll();
      },
      photos: async function (parent, args, context) {
        return await db.PHOTOS.findAll();
      },
    },
  },
});
