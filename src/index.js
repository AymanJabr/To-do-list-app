import createProject from "./project-model";
import createTodo from "./todo-model";
import app from "./app-model";
import insertAllProjects from "./dom-manipulation";
import "./style.css";
import "./modal.css";

// let CreateTodo = require('./todo-model')

let newProject = createProject("DEFAULT", "default project");
let newTodo = createTodo("my title", "my description ", "my due-date", 1);
newProject.addTodo(newTodo);
// console.log(newProject.getTodos())
app.addProject(newProject);

insertAllProjects();
