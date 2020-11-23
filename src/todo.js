export default (title, description, dueDate, priority, status) => {
  getTitle = () => {
    return title;
  }

  getDescription = () => {
    return description;
  }

  getDueDate = () => {
    return dueDate;
  }

  getPriority = () => {
    return priority;
  }
  
  getStatus = () => {
    return status;
  }

  return {getTitle, getDescription, getDueDate, getPriority, getStatus}
}