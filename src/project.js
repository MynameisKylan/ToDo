export default (name, id) => {
  let tasks = {};

  const getName = () => {
    return name;
  }

  const changeName = (newName) => {
    name = newName;
  }

  const add = (task, taskID) => {
    tasks[taskID] = task;
  }

  const remove = (taskID) => {
    delete tasks[taskID];
  }

  const getTasks = () => {
    return tasks;
  }

  const getId = () => {
    return id;
  }

  const setTasks = (newTasks) => {
    tasks = newTasks;
  }

  return {getName, changeName, add, remove, getTasks, getId, setTasks}
}