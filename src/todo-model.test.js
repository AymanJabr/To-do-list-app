const createTodo = require('./todo-model')

let newTodo = createTodo(
  "New Todo Name",
  "New Todo Description",
  "2021-12-20",
  0
);

test("Create Todo Object Successfully", () => {
  
  expect(Object.is(newTodo, createTodo)).toBe(true);
});

test("Create Todo Object Successfully", () => {
  expect(newTodo.getTitle()).toBe("New Todo Name");
});
