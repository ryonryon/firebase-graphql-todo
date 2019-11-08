import { gql } from "apollo-server-cloud-functions";

const typeDefs = gql`
  type Query {
    workses: [Works]
    getWorksByName(name: String!): Works
  }
  type Works {
    name: String!
    thumb: String!
  }

  type Todo {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
    isDone: Boolean!
  }

  type Mutation {
    createWorks(works: worksInput): Works
  }

  input worksInput {
    name: String
    thumb: String
  }
`;

export default typeDefs;
