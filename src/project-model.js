function createProject(title) {
  const _title = title;
  const todos = [];

  const getTitle = () => _title;

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const removeTodoByTitle = (todoTitle) => {
    todos.forEach((todo, index) => {
      if (todo.getTitle() == todoTitle) {
        todos.splice(index, 1);
      }
    });
  };

  const getTodoByTitle = (todoTitle) => {
    let myTodo;
    todos.forEach((todo) => {
      if (todo.getTitle() == todoTitle) {
        // console.log(todo)
        myTodo = todo;
      }
    });
    return myTodo;
  };

  const getTodos = () => todos;

  return {
    getTitle, addTodo, getTodos, getTodoByTitle, removeTodoByTitle,
  };
}

export default createProject;
// export {getTodoByTitle}
