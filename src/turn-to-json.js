import app from './app-model';

const turnToJson = () => {
  const myJsonData = {};
  // let myProjects = {}

  const allProjects = app.getProjects();

  allProjects.forEach((project) => {
    const myProject = {};

    const myTodos = {};
    const allTodos = project.getTodos();

    allTodos.forEach((todo) => {
      const myTitle = todo.getTitle();
      const myDescription = todo.getDescription();
      const myPriority = todo.getPriority();
      const myStatus = todo.getStatus();
      const myDueDate = todo.getDueDate();

      const myTodo = {};

      myTodo.title = myTitle;
      myTodo.description = myDescription;
      myTodo.priority = myPriority;
      myTodo.status = myStatus;
      myTodo.dueDate = myDueDate;

      myTodos[myTitle] = myTodo;
    });

    myProject.todos = myTodos;
    myJsonData[project.getTitle()] = myProject;
  });

  localStorage.setItem('app', myJsonData);

  console.log(myJsonData);
};

const turnToData = () => {
  console.log('turning to data');
};

export { turnToJson, turnToData };