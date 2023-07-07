import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { homeData } from "./static-data.js";

// Dummy graph QL defs
const typeDefs = `#graphql
  type Query {
      homeIntro: Intro
  }
  
  type Intro {
      headline: String
      descriptions:[HomeDescription]
  }
  type HomeDescription {
      title: String
      imageUrl: String
      functionality: String
      icon: String
  }
`;

const resolvers = {
  Query: {
    homeIntro: () => homeData
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

