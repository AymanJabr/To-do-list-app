const createTodo = (title, description, dueDate, priority, status = false) => {
  const myTitle = title;
  const myDescription = description;
  const myDueDate = dueDate;
  let myPriority = priority;
  let myStatus = status;

  const getTitle = () => myTitle;

  const getDescription = () => myDescription;

  const getPriority = () => myPriority;

  const getDueDate = () => {
    let dueDate;
    if (myStatus === true) {
      dueDate = 'Completed!';
    } else {
      dueDate = myDueDate;
    }
    return dueDate;
  };

  const toggleStatus = () => {
    if (myStatus === false) {
      myStatus = true;
    } else {
      myStatus = false;
    }
  };

  const changePriority = (newmyPriority) => {
    myPriority = newmyPriority;
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
