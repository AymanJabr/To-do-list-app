const createTodo = (title, description, dueDate, priority, status = false) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _status = status;
  const getTitle = () => {
    return _title;
  };
  return { getTitle };
};

export default createTodo;
