import Todo from './todo';
import Project from './project';
import displayTasks from './displayTasks';
import addTaskToList from './addTaskToList';
import './reset.css';
import './style.css';

let tasks = {};
let id = Object.keys(tasks).length
console.log(id);

// TODO: CHANGE METHOD OF ID SETTING AND RETRIEVAL. will break if tasks are deleted and then added

// For Development
let t1 = Todo('test', 'test', '2020-11-26', 'normal')
addTaskToList(tasks, t1, id);
id++;
let t2 = Todo('test2', 'test2', '2020-11-29', 'high')
addTaskToList(tasks, t2, id);
id++;
// ----------------
console.log(id);
// displayTasks(tasks);

let newBtn = document.getElementById('new-task');
let taskForm = document.getElementById('form-container');
let editForm = document.getElementById('edit-container');
newBtn.onclick = () => {
  taskForm.style.display = 'flex';
  document.getElementById('task-form').reset();
}

let closeBtn = document.getElementById('close-form');
closeBtn.onclick = () => {
  taskForm.style.display = 'none';
}

let closeBtn2 = document.getElementById('close-edit');
closeBtn2.onclick = () => {
  editForm.style.display = 'none';
}

let createBtn = document.getElementById('create-task');
createBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('task-form');
  let task = Todo(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
  addTaskToList(tasks, task, id);
  id++;
  // tasks.push(task);
  form.reset();
}

document.getElementById('notes').onclick = (event) => {
  if (event.target.getAttribute('class') == 'task-link') {
    console.log(event.target);
    let id = event.target.id;
    let task = tasks[parseInt(id)];
    let form = document.getElementById('edit-form');
    form.editId.value = id;
    form.title.value = task.getTitle();
    form.description.value = task.getDescription();
    form.dueDate.value = task.getDueDate();
    let currentPriority = task.getPriority().toLowerCase();
    let priority = form.priority;
    for (let i, j = 0; i = priority.options[j]; j++) {
      if (i.value == currentPriority) {
        priority.selectedIndex = j;
        break;
      }
    }
    document.getElementById('edit-container').style.display = 'flex';
  }
}

let updateBtn = document.getElementById('update-task')
updateBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('edit-form');
  let todo = tasks[parseInt(form.editId.value)];
  console.log(todo);
  todo.update(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
  displayTasks(tasks);
}
