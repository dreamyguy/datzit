const express = require('express');
const expressGraphQL = require('express-graphql');
const config = require('./../../config');
const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(config.PORT_EXPRESS_APP, () => {
  console.log(`Express listening for 'graphql' on port ${config.PORT_EXPRESS_GQL_APP} 🚀`);
});