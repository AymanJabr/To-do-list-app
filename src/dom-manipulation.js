import app from "./app-model";

const insertAllProjects = () => {
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
          <span class="todo-buttons"><button>Done</button><button>X</button></span>
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

  // Wait for Create Project Button to be clicked
  let create_project_button = document.getElementsByClassName(
    "add-project-button"
  )[0];
  create_project_button.onclick = () => {
    let title = document.getElementById("new-project-title").value;
    if (title != "") {
      let new_project = CreateProject(title);
      app.addProject(new_project);
      insertAllProjects();
    }
  };

  // Wait for Particular Project Div to be clicked on
  let project_divs = document.querySelectorAll(".project-title");
  project_divs.forEach((div, index) => {
    div.onclick = () => {
      let todos_div = document.querySelectorAll(`.project-${index}-todos`)[0];
      todos_div.style.display =
        todos_div.style.display == "none" ? "block" : "none";
    };
  });

  // Wait for submit new todo modal button clicked
  let submit_buttons = document.querySelectorAll(".submit-new-todo");
  submit_buttons.forEach((button) => {
    button.onclick = () => {
      let title = document.getElementById("todo-title").value;
      let description = document.getElementById("todo-desc").value;
      let dueDate = document.getElementById("todo-due-date").value;
      let priority = document.getElementById("todo-priority").value;
      let todo = CreateTodo(title, description, dueDate, priority);
      app.getProjects()[button.id].addTodo(todo);

      document.getElementById("newTodoModal").style.display = "none";
      insertAllProjects();
      document.getElementsByClassName(
        `project-${button.id}-todos`
      )[0].style.display = "block";
    };
  });
  // let project_add_todo = document.querySelectorAll(".project-add-todo");
  // project_add_todo.forEach((project) => {
  //   project.onclick = () => {
  //     app.setSelectedProject = project.id;
  //   };
  // });
};

export { insertAllProjects };
