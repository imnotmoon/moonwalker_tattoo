const express = require('express');
const path = require('path');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const scheme = buildSchema()

const root = {}

app.use('/api', graphqlHTTP({
  schema: scheme,
  rootValue: root,
  graphiql: true,
}))