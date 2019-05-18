import { makeExecutableSchema, ApolloServer } from 'apollo-server-express';
import { linkSchema } from './link.schema';

import { mergeResolvers } from '../utils/gq-helper';

const resolvers = mergeResolvers();

const typeDefs = [
  linkSchema,
];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default new ApolloServer({
  schema,
  debug: false,
  context: params => ({
    logger: params.req.log,
  }),
});
