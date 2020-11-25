import Task from './task';
import Project from './project';
import displayTasks from './displayTasks';
import displayProjects from './displayProjects';
import addTaskToList from './addTaskToList';
import loadProjects from './loadProjects';
import saveProjects from './saveProjects';
import saveIDs from './saveIDs';
import './reset.css';
import './style.css';

// let tasks = load(localStorage.getItem('tasks')) || {};
let taskID = JSON.parse(localStorage.getItem('taskID')) || 0;
// TODO: load projects from localStorage
let projects;
if (localStorage.getItem('projects') === null) {
  projects = {0: Project('default', 0)}; // Default project
} else {
  projects = loadProjects(localStorage.getItem('projects'));
}
let projectID = JSON.parse(localStorage.getItem('projectID')) || 1;
let currentProject = projects[0]; // Default project

console.log(projects);
console.log(currentProject.getTasks());
displayTasks(currentProject.getTasks());
displayProjects(projects);

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
  let task = Task(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
  addTaskToList(currentProject.getTasks(), task, taskID);
  taskID++;
  saveProjects(projects);
  saveIDs(taskID, projectID);
  form.reset();
  displayTasks(currentProject.getTasks())
}

document.getElementById('notes').onclick = (event) => {
  if (event.target.getAttribute('class') == 'task-link') {
    let id = event.target.id;
    let task = currentProject.getTasks()[parseInt(id)];
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
  } else if (event.target.getAttribute('class') == 'status-button') {
    let task = currentProject.getTasks()[event.target.id];
    task.toggleCompleted();
    displayTasks(currentProject.getTasks());
  }
}

let updateBtn = document.getElementById('update-task');
updateBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('edit-form');
  let task = currentProject.getTasks()[form.editId.value];
  task.update(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
  saveProjects(projects);
  displayTasks(currentProject.getTasks());
}

let deleteBtn = document.getElementById('delete-task');
deleteBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('edit-form');
  let id = form.editId.value;
  delete currentProject.getTasks()[id];
  saveProjects(projects);
  editForm.style.display = 'none';
  displayTasks(currentProject.getTasks());
}

let defaultBtn = document.getElementById('default-tasks');
defaultBtn.onclick = (e) => {
  e.preventDefault();
  let header = document.getElementById('main-header');
  header.innerHTML = 'Tasks';
  currentProject = projects[0];
  displayTasks(currentProject.getTasks());
}

let newProjectBtn = document.getElementById('new-project');
let projectForm = document.getElementById('project-container');
newProjectBtn.onclick = () => {
  projectForm.style.display = 'flex';
}

let closeProjectBtn = document.getElementById('close-project');
closeProjectBtn.onclick = () => {
  projectForm.style.display = 'none';
}

let createProjectBtn = document.getElementById('create-project');
createProjectBtn.onclick = (e) => {
  e.preventDefault();
  let form = document.getElementById('project-form');
  let project = Project(form.projectName.value, projectID);
  projects[projectID] = project;
  let sidebar = document.getElementById('sidebar');
  let projectBtn = document.createElement('button');
  projectBtn.innerHTML = project.getName();
  projectBtn.id = projectID;
  projectBtn.classList.add('project-button');
  projectID++;

  saveProjects(projects);

  sidebar.appendChild(projectBtn);
}

document.getElementById('sidebar').onclick = (e) => {
  if (e.target.getAttribute('class') == 'project-button') {
    let project = projects[e.target.id];
    let header = document.getElementById('main-header');
    header.innerHTML = project.getName();
    currentProject = project;
    displayTasks(currentProject.getTasks());
  }
}
