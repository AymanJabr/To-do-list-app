import app from './app-model';
import createProject from './project-model';

import createTodo from './todo-model';

const turnToJson = () => {
  const myJsonData = {};

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

  localStorage.setItem('app', JSON.stringify(myJsonData));
};

/* eslint-disable */
const turnToData = (myApp) => {
  app.removeProjectByTitle("DEFAULT");
  for (const project in myApp) {
    const newProject = createProject(project);
    for (const todo in myApp[project].todos) {
      const todoObj = myApp[project].todos[todo];
      const newTodo = createTodo(
        todoObj.title,
        todoObj.description,
        todoObj.dueDate,
        todoObj.priority
      );
      newProject.addTodo(newTodo);
    }
    app.addProject(newProject);
  }
};
/* eslint-disable */

export { turnToJson, turnToData };
