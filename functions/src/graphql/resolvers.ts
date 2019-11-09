import getAllTodo from "./resolvers/getAllTodo";
import createTodo from "./resolvers/createTodo";

const resolvers = {
  Query: {
    getAllTodo
  },
  Mutation: {
    createTodo
  }
};

export default resolvers;
