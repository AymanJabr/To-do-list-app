import app from "./app-model";
import createProject from "./project-model";

import createTodo from "./todo-model";

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

  localStorage.setItem("app", JSON.stringify(myJsonData));

  // console.log(myJsonData);
};

const turnToData = (myApp) => {
  app.removeProjectByTitle("DEFAULT");
  for (const project in myApp) {
    console.log(`${project}: ${myApp[project]}`);
    let new_project = createProject(project);
    for (const todo in myApp[project].todos) {
      let todoObj = myApp[project].todos[todo];
      console.log(todoObj);
      let new_todo = createTodo(
        todoObj.title,
        todoObj.description,
        todoObj.dueDate,
        todoObj.priority
      );
      new_project.addTodo(new_todo);
    }
    app.addProject(new_project);
  }
};

export { turnToJson, turnToData };
