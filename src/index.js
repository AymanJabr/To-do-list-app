import createProject from './project-model';
import createTodo from './todo-model';
import app from './app-model';
import insertAllProjects from './dom-manipulation';
import './style.css';
import './modal.css';

// let CreateTodo = require('./todo-model')

const newProject = createProject('DEFAULT', 'default project');
const newTodo = createTodo('my title', 'my description ', '2021-12-20', 1);
newProject.addTodo(newTodo);
// console.log(newProject.getTodos())
app.addProject(newProject);

insertAllProjects();
