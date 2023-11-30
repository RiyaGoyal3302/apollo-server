const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs, resolvers,});

server.listen({ port: 4000 }, () =>
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
);
