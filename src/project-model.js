function createProject(title) {
  let _title = title;
  let todos = [];

  const getTitle = () => {
    return _title;
  };

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const getTodos = () => {
    return todos;
  };

  return { getTitle, addTodo, getTodos };
}

export default createProject;
