import { makeExecutableSchema, ApolloServer } from 'apollo-server-express';
import { linkSchema } from './link.schema';
import { pathResolver, pathSchema } from './path';
import { mergeResolvers } from '../utils/gq-helper';

const resolvers = mergeResolvers(pathResolver);

const typeDefs = [
  linkSchema,
  pathSchema,
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
