import createProject from "./project-model";
import createTodo from "./todo-model";
import app from "./app-model";
import { insertAllProjects } from "./dom-manipulation";
import "./style.css";

// let CreateTodo = require('./todo-model')

let newProject = createProject("default", "default project")
let newTodo = createTodo("my title", "my description ", "my due-date", 1)
newProject.addTodo(newTodo)
app.addProject(newProject);


insertAllProjects();
