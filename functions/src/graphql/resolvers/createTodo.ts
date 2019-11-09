import firestore from "../../singleton/firestore";

async function createTodo(_: any, args: any, __: any, ___: any) {
  try {
    await firestore.collection("todos").add({
      title: args.todo.title,
      content: args.todo.content,
      isDone: false
    });
  } catch (err) {
    console.error(err);
  }
}

export default createTodo;
