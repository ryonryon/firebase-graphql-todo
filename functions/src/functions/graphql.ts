import * as functions from "firebase-functions";
import { ApolloServer } from "apollo-server-cloud-functions";
import { importSchema } from "graphql-import";
import resolvers from "../graphql/resolvers";

const typeDefs = importSchema("./src/graphql/schema.graphql");

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
