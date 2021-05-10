function createProject(title) {
  let _title = title;
  let todos = [];

  const getTitle = () => {
    return _title;
  };

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const getTodoByTitle = (todoTitle) => {
    let myTodo
    todos.forEach(todo => {
      if (todo.getTitle() == todoTitle) {
        // console.log(todo)
        myTodo = todo
      }
    })
    return myTodo
  }

  const getTodos = () => {
    return todos;
  };

  return { getTitle, addTodo, getTodos, getTodoByTitle };
}

export default createProject;
// export {getTodoByTitle}
