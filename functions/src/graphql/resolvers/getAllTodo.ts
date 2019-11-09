import firestore from "../../singleton/firestore";
import Todo from "../../entities/Todo";

async function getAllTodo() {
  const todos = await firestore.collection("todos").get();
  return todos.docs.map(works => works.data()) as Todo[];
}

export default getAllTodo;
