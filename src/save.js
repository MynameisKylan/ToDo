export default function(tasks, id) {
  localStorage.setItem('tasks', 
    JSON.stringify(Object.values(tasks).map((task) => {
      return {title: task.getTitle(), description: task.getDescription(), dueDate: task.getDueDate(), priority: task.getPriority(), id: task.getId(), completed: task.getCompleted()}
    }))
  )
  
  localStorage.setItem('id', JSON.stringify(id));
}