export default function(task) {
  let list = document.getElementById('notes');
  let note = document.createElement('li');
  note.classList.add('note');

  let title = document.createElement('span')
  title.innerHTML = task.getTitle();
  title.id = list.childElementCount - 1;
  task.setId(title.id);
  title.classList.add('task-link');
  note.appendChild(title);

  let dueDate = document.createElement('span');
  dueDate.innerHTML = task.getDueDate();
  note.appendChild(dueDate);
  
  let priority = document.createElement('span');
  priority.innerHTML = task.getPriority();
  note.appendChild(priority);

  let status = document.createElement('span');
  status.innerHTML = task.getCompleted() ? 'Complete' : 'Incomplete';
  note.appendChild(status);

  list.appendChild(note);
}