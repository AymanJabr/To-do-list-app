/* eslint-disable import/no-cycle */
import createProject from './project-model';
import createTodo from './todo-model';
import app from './app-model';
import insertAllProjects from './dom-manipulation';
import insertModal from './modal';
/* eslint-enable import/no-cycle */

// console.log("app is in fact", app);

const clickingEvents = () => {
  const createProjectButton = document.getElementsByClassName(
    'add-project-button',
  )[0];
  createProjectButton.onclick = () => {
    const title = document.getElementById('new-project-title').value;
    if (title !== '') {
      const newProject = createProject(title);
      app.addProject(newProject);

      insertAllProjects();
    }
  };

  const projectDivs = document.querySelectorAll('.project-title');
  projectDivs.forEach((div, index) => {
    div.onclick = () => {
      const todosDiv = document.querySelectorAll(`.project-${index}-todos`)[0];
      todosDiv.style.display = todosDiv.style.display === 'none' ? 'block' : 'none';
    };
  });

  const submitButtons = document.querySelectorAll('.submit-new-todo');
  submitButtons.forEach((button) => {
    button.onclick = () => {
      const title = document.getElementById('todo-title').value;
      const description = document.getElementById('todo-desc').value;
      const dueDate = document.getElementById('todo-due-date').value;
      const priority = document.getElementById('todo-priority').value;
      const todo = createTodo(title, description, dueDate, priority);
      app.getProjects()[button.id].addTodo(todo);

      document.getElementById('newTodoModal').style.display = 'none';
      insertAllProjects();
      document.getElementsByClassName(
        `project-${button.id}-todos`,
      )[0].style.display = 'block';
    };
  });

  let allNodes = document.querySelectorAll('.todo-completed-button');
  let myArray = [...allNodes];
  myArray.forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.classList.toggle('todo-completed');
      const myProjectTitle = button.parentElement.parentElement.parentElement.parentElement
        .firstChild.firstChild.innerText;
      const myTodoTitle = button.parentElement.parentElement.childNodes[1].innerHTML;
      const myProject = app.getProjectByTitle(myProjectTitle);
      const myTodo = myProject.getTodoByTitle(myTodoTitle);
      myTodo.toggleStatus();

      insertAllProjects();

      document
        .querySelectorAll('.project-todos > .todo > .todo-title')
        .forEach((project) => {
          const myParent = project.parentElement.parentElement;
          if (project.innerText === myTodoTitle) {
            myParent.classList.add('display-block');
          }
        });
    });
  });

  allNodes = document.querySelectorAll('.todo-remove-button');
  myArray = [...allNodes];
  myArray.forEach((button) => {
    button.addEventListener('click', () => {
      const myProjectTitle = button.parentElement.parentElement.parentElement.parentElement
        .firstChild.firstChild.innerText;
      const myTodoTitle = button.parentElement.parentElement.childNodes[1].innerHTML;
      const myProject = app.getProjectByTitle(myProjectTitle);
      myProject.removeTodoByTitle(myTodoTitle);

      insertAllProjects();
    });
  });

  const myInfo = {};

  document.querySelectorAll('.todo-title').forEach((div) => {
    div.onclick = () => {
      const modal = document.getElementById('editTodoModal');
      modal.style.display = 'block';

      const projectTitle1 = div.parentElement.parentElement.parentElement;
      const projectTitle = projectTitle1.firstChild.firstChild.innerText;

      const thisProject = app.getProjectByTitle(projectTitle);
      myInfo.thisProject = thisProject;

      const todoData = thisProject.getTodoByTitle(div.innerHTML);

      myInfo.todoData = todoData;

      const updatedTitle = document.getElementById('edit-todo-title');
      updatedTitle.value = todoData.getTitle();

      myInfo.updatedTitle = updatedTitle.value;
      const updatedDescription = document.getElementById('edit-todo-desc');
      updatedDescription.value = todoData.getDescription();
      myInfo.updatedDescription = updatedDescription.value;
      const updatedDueDate = document.getElementById('edit-todo-due-date');
      updatedDueDate.value = todoData.getDueDate();
      myInfo.updatedDueDate = updatedDueDate.value;
      const updatedPriority = document.getElementById('edit-todo-priority');
      updatedPriority.value = todoData.getPriority();
      myInfo.updatedPriority = updatedPriority.value;
    };
  });

  document.getElementById('submit-edit-todo').onclick = () => {
    const thisProject = app.getProjectByTitle(myInfo.thisProject.getTitle());
    const { todoData } = myInfo;

    const updatedTitle = document.getElementById('edit-todo-title').value;
    const updatedDescription = document.getElementById('edit-todo-desc').value;
    const updatedDueDate = document.getElementById('edit-todo-due-date').value;
    const updatedPriority = document.getElementById('edit-todo-priority').value;

    thisProject.removeTodoByTitle(todoData.getTitle());
    const newToDo = createTodo(
      updatedTitle,
      updatedDescription,
      updatedDueDate,
      updatedPriority,
    );
    thisProject.addTodo(newToDo);

    const modal = document.getElementById('editTodoModal');
    modal.style.display = 'none';

    insertAllProjects();

    document
      .querySelectorAll('.project-todos > .todo > .todo-title')
      .forEach((project) => {
        const myParent = project.parentElement.parentElement;
        if (project.innerText === updatedTitle) {
          myParent.classList.add('display-block');
        }
      });
  };

  insertModal();
};

export default clickingEvents;
