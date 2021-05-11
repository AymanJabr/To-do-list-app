const createTodo = (title, description, dueDate, priority, status = false) => {
  const _title = title;
  const _description = description;
  const _dueDate = dueDate;
  let _priority = priority;
  let _status = status;

  const getTitle = () => _title;

  const getDescription = () => _description;

  const getPriority = () => _priority;

  const getDueDate = () => {
    let dueDate;
    if (_status == true) {
      dueDate = 'Completed!';
    } else {
      dueDate = _dueDate;
    }
    return dueDate;
  };

  const toggleStatus = () => {
    if (_status == false) {
      _status = true;
    } else {
      _status = false;
    }
  };

  const changePriority = (new_priority) => {
    _priority = new_priority;
  };
  return {
    getPriority,
    changePriority,
    getTitle,
    getDescription,
    getDueDate,
    toggleStatus,
  };
};
export default createTodo;
