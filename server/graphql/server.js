const express = require('express');
const expressGraphQL = require('express-graphql');
const { PORT_EXPRESS_GQL_APP, URL_BASE_DEV } = require('./../../src/config');
const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(PORT_EXPRESS_GQL_APP, () => {
  console.log(`Express listening for 'graphql' on ${URL_BASE_DEV}${PORT_EXPRESS_GQL_APP}/graphql 🚀`);
});
