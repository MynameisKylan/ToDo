import Todo from './todo';

export default function(tasks) {
  if (tasks === null) {
    return false;
  }

  let list = {};

  JSON.parse(tasks).map((task) => {
    return Todo(task.title, task.description, task.dueDate, task.priority, task.completed, task.id)
  }).forEach((task) => {
    list[task.getId()] = task;
  })

  return list;
}
