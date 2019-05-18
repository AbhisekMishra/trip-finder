import express from 'express';

const apolloServer = require('./graphql').default;

const app = express();

app.use(express.static('dist'));
apolloServer.applyMiddleware({
  app,
  path: '/api',
});
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
