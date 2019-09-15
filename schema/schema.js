const graphql = require('graphql');
const axios = require('axios');
const { PORT_JSON_SERVER } = require('./../config');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

// Define types
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        // return _.find(users, { id: args.id });
        return axios.get(`http://localhost:${PORT_JSON_SERVER}/users/${args.id}`)
        .then(resp => resp.data); // because 'axios' returns a 'data' obj
      }
    }
  }
});

module. exports = new GraphQLSchema({
  query: RootQuery
});
