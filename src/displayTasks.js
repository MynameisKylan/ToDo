export default function (tasks) {
  let list = document.getElementById('notes');

  while (list.children.length > 1) {
    let child = list.lastChild;
    if (!child.classList.contains('header')) {
      list.removeChild(child);
    }
  }

  Object.values(tasks).forEach((task) => {
    let note = document.createElement('li');
    note.classList.add('note');

    let title = document.createElement('span')
    title.innerHTML = task.getTitle();
    title.classList.add('task-link');
    title.id = task.getId();
    note.appendChild(title);

    let dueDate = document.createElement('span');
    dueDate.innerHTML = task.getDueDate();
    note.appendChild(dueDate);
    
    let priority = document.createElement('span');
    priority.innerHTML = task.getPriority();
    note.appendChild(priority);

    let status = document.createElement('span');
    status.innerHTML = task.getCompleted() ? 'Complete' : 'Incomplete';
    status.classList.add('status-button');
    status.id = task.getId();
    note.appendChild(status);

    status.style.backgroundColor = task.getCompleted() ? 'lightgreen' : '';

    list.appendChild(note);
  })
}