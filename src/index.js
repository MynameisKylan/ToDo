import Todo from './todo';
import Project from './project';
import addTaskToList from './addTaskToList';
import './reset.css';
import './style.css';

let tasks = [];

let newBtn = document.getElementById('new-task');
let taskForm = document.getElementById('form-container');
newBtn.onclick = () => {
  taskForm.style.display = 'flex';
}

let closeBtn = document.getElementById('close');
closeBtn.onclick = () => {
  taskForm.style.display = 'none';
}

let createBtn = document.getElementById('create-task');
createBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('task-form');
  let task = Todo(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
  tasks.push(task);
  addTaskToList(task);
}