const { ApolloServer, gql } = require('apollo-server');
const express = require('express');
const { Pool } = require('pg');

// Create an Express app
const app = express();

// Create a PostgreSQL database connection pool
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432, // Change as needed
});

// Define your GraphQL schema
const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
  }

  type Query {
    users: [User]
  }
`;

// Create resolver functions to fetch data from the database
const resolvers = {
  Query: {
    users: async () => {
      try {
        const { rows } = await pool.query('SELECT * FROM users');
        return rows;
      } catch (error) {
        throw error;
      }
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply the Apollo Server as middleware to Express
server.applyMiddleware({ app });

// Start the Express server
app.listen({ port: 4000 }, () =>
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
);
