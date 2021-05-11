const insertModal = () => {
  // Get the modal
  const modal = document.getElementById('newTodoModal');

  // Get the buttons that open the modal
  const buttons = document.querySelectorAll('.project-add-todo');
  buttons.forEach((button) => {
    button.onclick = () => {
      modal.style.display = 'block';
      modal.getElementsByTagName('button')[0].id = button.id;
    };
  });

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  // EDIT MODAL

  // Get the modal
  const editModal = document.getElementById('editTodoModal');

  // Get the <span> element that closes the modal
  const editSpan = document.getElementsByClassName('edit-close')[0];

  // When the user clicks on <span> (x), close the modal
  editSpan.onclick = () => {
    editModal.style.display = 'none';
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === editModal) {
      editModal.style.display = 'none';
    }
  };
};

export default insertModal;
