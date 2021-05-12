const createTodo = require('./todo-model')

let newTodo = createTodo(
  "New Todo Name",
  "New Todo Description",
  "2021-12-20",
  0,
  true
);

test("Created Todo saves name correctly", () => {
  expect(newTodo.getTitle()).toBe("New Todo Name");
});
test("Created Todo saves description correctly", () => {
  expect(newTodo.getDescription()).toBe("New Todo Description");
});
test("Created Todo saves due-date correctly", () => {
  expect(newTodo.getDueDate()).toBe("Completed!");
});
test("Created Todo saves priority correctly", () => {
  expect(newTodo.getPriority()).toBe(0);
});
test("Created Todo saves status correctly", () => {
  expect(newTodo.getStatus()).toBe(true);
});
test("Toggle Status returns false", () => {
  newTodo.toggleStatus()
  expect(newTodo.getStatus()).toBe(false);
});
test("Change priority to 1", () => {
  newTodo.changePriority(1)
  expect(newTodo.getPriority()).toBe(1);
});
