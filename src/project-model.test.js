const createProject = require('./project-model');
const createTodo = require('./todo-model');

const newTodo = createTodo(
  'New Todo Name',
  'New Todo Description',
  '2021-12-20',
  0,
  true,
);
const myProject = createProject('New Project Title');
test('Project is correctly created with expected name', () => {
  expect(myProject.getTitle()).toStrictEqual('New Project Title');
});
test('Todo Is correctly added to myProject', () => {
  myProject.addTodo(newTodo);
  expect(myProject.getTodos()).toStrictEqual([newTodo]);
});
test('Get todo by title correctly', () => {
  expect(myProject.getTodoByTitle('New Todo Name')).toStrictEqual(newTodo);
});
test('Todo is correctly removed from Todos array', () => {
  myProject.removeTodoByTitle('New Todo Name');
  expect(myProject.getTodos()).toStrictEqual([]);
});
