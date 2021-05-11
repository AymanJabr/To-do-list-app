const insertModal = () => {
  const modal = document.getElementById('newTodoModal');

  const buttons = document.querySelectorAll('.project-add-todo');
  buttons.forEach((button) => {
    button.onclick = () => {
      modal.style.display = 'block';
      modal.getElementsByTagName('button')[0].id = button.id;
    };
  });

  const span = document.getElementsByClassName('close')[0];

  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  const editModal = document.getElementById('editTodoModal');

  const editSpan = document.getElementsByClassName('edit-close')[0];

  editSpan.onclick = () => {
    editModal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === editModal) {
      editModal.style.display = 'none';
    }
  };
};

export default insertModal;
