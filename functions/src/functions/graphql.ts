import * as functions from "firebase-functions";
import { ApolloServer } from "apollo-server-cloud-functions";

import typeDefs from "../graphql/schema";
import resolvers from "../graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    headers: req.headers,
    req,
    res
  })
});

const graphql = functions.https.onRequest(server.createHandler());

export default graphql;
