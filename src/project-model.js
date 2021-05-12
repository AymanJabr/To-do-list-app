function createProject(title) {
  const myTitle = title;
  const todos = [];

  const getTitle = () => myTitle;

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const removeTodoByTitle = (todoTitle) => {
    todos.forEach((todo, index) => {
      if (todo.getTitle() === todoTitle) {
        todos.splice(index, 1);
      }
    });
  };

  const getTodoByTitle = (todoTitle) => {
    let myTodo;
    todos.forEach((todo) => {
      if (todo.getTitle() === todoTitle) {
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

module.exports = createProject
