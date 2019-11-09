import firestore from "../../singleton/firestore";
import Todo from "../../entities/Todo";

async function getAllTodo(): Promise<Todo[]> {
  const todos = await firestore.collection("todos").get();
  return todos.docs.map(todo => {
    const rawTodo = todo.data();
    return new firestoreTodo(
      todo.id,
      rawTodo.title,
      rawTodo.content,
      rawTodo.isDone
    );
  });
}

class firestoreTodo implements Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;

  constructor(id: string, title: string, content: string, isDone: boolean) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.isDone = isDone;
  }
}

export default getAllTodo;
