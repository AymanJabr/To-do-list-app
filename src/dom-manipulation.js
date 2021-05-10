import app from "./app-model";
import clickingEvents from "./clicking-events";

const insertAllProjects = (recreatePage) => {
  let projects_div = document.getElementById("projects");
  projects_div.innerHTML = "";
  app.getProjects().forEach((project, index) => {
    let project_div = `
        <div class="project"><div class="project-wrapper"><span class="project-title">${project.getTitle()}</span>
        <span class="project-buttons"><button id="${index}" class="project-add-todo">+</button></span></div>
        <div class="project-todos project-${index}-todos" style="display: none;">
        </div>
        </div>`;
    projects_div.innerHTML += project_div;
    let project_todos_div = document.getElementsByClassName(
      `project-${index}-todos`
    )[0];

    project.getTodos().forEach((todo) => {
      let project_todo = `
        <div class="todo">
          <span class="todo-title">${todo.getTitle()}</span>
          <span class="todo-buttons"><button class="todo-completed-button">Done</button><button class="todo-remove-button">X</button></span>
          <span class="todo-due-date">Due: ${todo.getDueDate()}</span>
        </div>
        `;
      project_todos_div.innerHTML += project_todo;
    });
  });

  let new_project_div = `
    <div class="add-project">
    <input id="new-project-title" type="text" placeholder="Enter New Project Title" required="required">
    <button class="add-project-button">Create Project</button>
    </div>
  `;
  projects_div.innerHTML += new_project_div;

  clickingEvents();
};

export default insertAllProjects;
