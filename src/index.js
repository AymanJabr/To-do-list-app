import createProject from "./project-model";
import createTodo from "./todo-model";
import app from "./app-model";
import { insertAllProjects } from "./dom-manipulation";
import "./style.css";

// let CreateTodo = require('./todo-model')

app.addProject(createProject("default", "default project"));

insertAllProjects();
