import createProject from "./project-model";
import createTodo from "./todo-model";
import app from "./app-model";
import insertAllProjects from "./dom-manipulation";
import insertModal from "./modal";

let clickingEvents = () => {
  // Wait for Create Project Button to be clicked
  let create_project_button = document.getElementsByClassName(
    "add-project-button"
  )[0];
  create_project_button.onclick = () => {
    let title = document.getElementById("new-project-title").value;
    if (title != "") {
      let new_project = createProject(title);
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
      let todo = createTodo(title, description, dueDate, priority);
      app.getProjects()[button.id].addTodo(todo);

      document.getElementById("newTodoModal").style.display = "none";
      insertAllProjects();
      document.getElementsByClassName(
        `project-${button.id}-todos`
      )[0].style.display = "block";
    };
  });

  let all_nodes = document.querySelectorAll(".todo-completed-button");
  let my_array = [...all_nodes];
  my_array.forEach((button) => {
    button.addEventListener("click", () => {

      button.parentElement.parentElement.classList.toggle("todo-completed");
      let myProjectTitle =
        button.parentElement.parentElement.parentElement.parentElement
          .firstChild.firstChild.innerText;
      let myTodoTitle =
        button.parentElement.parentElement.childNodes[1].innerHTML;
      let myProject = app.getProjectByTitle(myProjectTitle);
      let myTodo = myProject.getTodoByTitle(myTodoTitle);
      myTodo.toggleStatus();

      insertAllProjects();

      document
        .querySelectorAll(".project-todos > .todo > .todo-title")
        .forEach((project) => {
          let myParent = project.parentElement.parentElement;
          if (project.innerText == myTodoTitle) {
            myParent.classList.add("display-block");
          }
        });

    });
  });

  all_nodes = document.querySelectorAll(".todo-remove-button");
  my_array = [...all_nodes];
  my_array.forEach((button) => {
    button.addEventListener("click", () => {

      let myProjectTitle =
        button.parentElement.parentElement.parentElement.parentElement
          .firstChild.firstChild.innerText;
      let myTodoTitle =
        button.parentElement.parentElement.childNodes[1].innerHTML;
      let myProject = app.getProjectByTitle(myProjectTitle);
      myProject.removeTodoByTitle(myTodoTitle);

      insertAllProjects();
    });
  });


  let my_info = {}

  let todo_divs = document.querySelectorAll(".todo-title").forEach((div) => {
    div.onclick = (e) => {
      let modal = document.getElementById("editTodoModal");
      modal.style.display = "block";

      let projectTitle =
        div.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;

      let this_project = app.getProjectByTitle(projectTitle);
      my_info['this_project'] = this_project
      
      let todo_data = this_project.getTodoByTitle(div.innerHTML);
      
      my_info['todo_data'] = todo_data
      
      let updated_title = document.getElementById("edit-todo-title");
      updated_title.value = todo_data.getTitle();
      
      my_info['updated_title'] = updated_title.value
      let updated_description = document.getElementById("edit-todo-desc");
      updated_description.value = todo_data.getDescription();
      my_info['updated_description'] = updated_description.value
      let updated_due_date = document.getElementById("edit-todo-due-date");
      updated_due_date.value = todo_data.getDueDate();
      my_info['updated_due_date'] = updated_due_date.value
      let updated_priority = document.getElementById("edit-todo-priority");
        updated_priority.value = todo_data.getPriority();
        my_info['updated_priority'] = updated_priority.value
    };
  });

  document.getElementById("submit-edit-todo").onclick = () => {
    
    let this_project = app.getProjectByTitle(my_info['this_project'].getTitle())
    let todo_data = my_info['todo_data']


    let updated_title = document.getElementById("edit-todo-title").value;
    let updated_description = document.getElementById("edit-todo-desc").value;
    let updated_due_date = document.getElementById("edit-todo-due-date").value;
    let updated_priority = document.getElementById("edit-todo-priority").value;



    console.log(todo_data.getTitle(), updated_title)
    this_project.removeTodoByTitle(todo_data.getTitle());
      let new_to_do = createTodo(
          updated_title,
          updated_description,
          updated_due_date,
          updated_priority
      )
      console.log(new_to_do)
    this_project.addTodo( new_to_do);

    console.log(this_project.getTodos())

    let modal = document.getElementById("editTodoModal");
    modal.style.display = "none";

    
    insertAllProjects()
    
    document.querySelectorAll(".project-todos > .todo > .todo-title")
        .forEach((project) => {
          let myParent = project.parentElement.parentElement;
          if (project.innerText == updated_title) {
            myParent.classList.add("display-block");
          }
        });

  };

  insertModal();
};

export default clickingEvents;
