export default (name) => {
  let todos = [];

  const getName = () => {
    return name;
  }

  const changeName = (newName) => {
    name = newName;
  }

  const add = (todo) => {
    todos.push(todo);
  }

  const remove = (todo) => {
    todos.splice(todos.indexOf(todo), 1);
  }

  return {getName, changeName, add, remove}
}