import * as functions from "firebase-functions";
import { ApolloServer, gql } from "apollo-server-cloud-functions";

import firestore from "../singleton/firestore";

const typeDefs = gql`
  type Query {
    workses: [Works]
    getWorksByName(name: String!): Works
  }
  type Works {
    name: String!
    thumb: String!
  }

  type Mutation {
    createWorks(works: worksInput): Works
  }

  input worksInput {
    name: String
    thumb: String
  }
`;

interface Works {
  name: string;
  thumb: string;
}

const resolvers = {
  Query: {
    async workses() {
      const workses = await firestore.collection("works").get();
      return workses.docs.map(works => works.data()) as Works[];
    },

    async getWorksByName(_: any, args: any, __: any, ___: any) {
      const worksData = await firestore
        .collection("works")
        .doc("yC2qmXpNyT8GpZpD0PIL")
        .get();
      return worksData.data() as Works;
    }
  },
  Mutation: {
    async createWorks(_: any, args: any, __: any, ___: any) {
      try {
        await firestore.collection("works").add({
          name: args.works.name,
          thumb: args.works.thumb
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
};

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
