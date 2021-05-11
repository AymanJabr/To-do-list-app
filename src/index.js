import createProject from "./project-model";
import createTodo from "./todo-model";
import app from "./app-model";
import insertAllProjects from "./dom-manipulation";
import "./style.css";
import "./modal.css";
import { turnToData } from "./turn-to-json";

const newProject = createProject("DEFAULT", "default project");
const newTodo = createTodo("my title", "my description ", "2021-12-20", 1);
const newTodo2 = createTodo("my title2", "my description ", "2021-12-20", 1);
newProject.addTodo(newTodo);
newProject.addTodo(newTodo2);
app.addProject(newProject);

const myApp = JSON.parse(localStorage.getItem("app"));
if (myApp !== null) turnToData(myApp);

insertAllProjects();
