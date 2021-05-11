/* eslint-disable import/no-cycle */
import app from "./app-model";
import clickingEvents from "./clicking-events";
import { turnToJson } from "./turn-to-json";
/* eslint-enable import/no-cycle */

const insertAllProjects = (recreatePage = false) => {
  const projectsDiv = document.getElementById("projects");
  projectsDiv.innerHTML = "";
  app.getProjects().forEach((project, index) => {
    const projectDiv = `
        <div class="project"><div class="project-wrapper"><span class="project-title">${project.getTitle()}</span>
        <span class="project-buttons"><button id="${index}" class="project-add-todo">+</button></span></div>
        <div class="project-todos project-${index}-todos" style="display: none;">
        </div>
        </div>`;
    projectsDiv.innerHTML += projectDiv;
    const projectTodosDiv = document.getElementsByClassName(
      `project-${index}-todos`
    )[0];

    project.getTodos().forEach((todo) => {
      const projectTodo = `
        <div class="todo">
          <span class="todo-title">${todo.getTitle()}</span>
          <span class="todo-buttons"><button class="todo-completed-button">Done</button><button class="todo-remove-button">X</button></span>
          <span class="todo-due-date">Due: ${todo.getDueDate()}</span>
        </div>
        `;
      projectTodosDiv.innerHTML += projectTodo;
    });
  });

  const newProjectDiv = `
    <div class="add-project">
    <input id="new-project-title" type="text" placeholder="Enter New Project Title" required="required">
    <button class="add-project-button">Create Project</button>
    </div>
  `;
  projectsDiv.innerHTML += newProjectDiv;
  turnToJson();
  clickingEvents();
};

export default insertAllProjects;
