const express = require('express');
const expressGraphQL = require('express-graphql');


const config = require('./config');

const app = express();

app.use('/graphql', expressGraphQL({
  graphiql: true
}));

app.listen(config.PORT_EXPRESS_APP, () => {
  console.log(`Express listening on port ${config.PORT_EXPRESS_APP} 🚀`);
});
