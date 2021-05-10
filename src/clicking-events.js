import createProject from "./project-model";
// import {getTodoByTitle} from './project-model'
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


    let all_nodes = document.querySelectorAll(".todo-completed-button")
    let my_array = [...all_nodes]
    my_array.forEach( button => {
        button.addEventListener('click', () => {
            // console.log("clicked on button")

            button.parentElement.parentElement.classList.add("todo-completed")
            let myProjectTitle = button.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText
            let myTodoTitle = (button.parentElement.parentElement.childNodes[1].innerHTML)
            let myProject = app.getProjectByTitle(myProjectTitle)
            let myTodo =  myProject.getTodoByTitle(myTodoTitle)
            myTodo.toggleStatus()

            insertAllProjects();
        })
    })



    let all_nodes = document.querySelectorAll(".todo-completed-button")
    let my_array = [...all_nodes]
    my_array.forEach(button => {
        button.addEventListener('click', () => {
            // console.log("clicked on button")

            insertAllProjects();
        })
    })




  insertModal();
};

export default clickingEvents;
