import Todo from './todo';
import Project from './project';

let newBtn = document.getElementById('new-task');
let taskForm = document.getElementById('task-form');
newBtn.onclick = () => {
  let todo = Todo('test', 'description', '09/25/2020', 'low', 'incomplete');
}