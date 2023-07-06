import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";

// Dummy graph QL defs
const typeDefs = `#graphql
    type Query {
        hello: String
        message: Message
    }

    type Message {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    message: () => {
      return {greeting: 'The GraphQL message'}
    }
  },
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use(expressMiddleware(server));

  app.listen({ port: 4000 }, () =>
    console.log('Server started on port 4000')
  );
};

startServer();

