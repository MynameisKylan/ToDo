import Todo from './todo';
import Project from './project';
import './reset.css';
import './style.css';

let newBtn = document.getElementById('new-task');
let taskForm = document.getElementById('form-container');
newBtn.onclick = () => {
  taskForm.style.display = 'flex';
}

let closeBtn = document.getElementById('close');
closeBtn.onclick = () => {
  taskForm.style.display = 'none';
}