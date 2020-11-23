export default (title, description, dueDate, priority, completed = false, id = undefined) => {
  const setId = (id) => {
    id = id;
  }

  const getId = () => {
    return id;
  }

  const getTitle = () => {
    return title;
  }

  const getDescription = () => {
    return description;
  }

  const getDueDate = () => {
    return dueDate;
  }

  const getPriority = () => {
    return priority;
  }
  
  const getCompleted = () => {
    return completed;
  }

  return {getTitle, getDescription, getDueDate, getPriority, getCompleted, setId, getId}
}