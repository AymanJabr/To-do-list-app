import createTodo from "./todo-model";

test("Create Todo Object Successfully", () => {
  let new_todo = createTodo(
    "New Todo Name",
    "New Todo Description",
    "2021-12-20",
    0
  );
  expect(new_todo.getTitle()).toBe("New Todo Name");
});
