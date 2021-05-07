function createTodo(title, description, dueDate, priority, status = false) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    status: status,
  };
}

export default createTodo;
