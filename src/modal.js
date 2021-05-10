const insertModal = () => {
  // Get the modal
  let modal = document.getElementById("newTodoModal");

  // Get the buttons that open the modal
  let buttons = document.querySelectorAll(".project-add-todo");
  buttons.forEach((button) => {
    button.onclick = () => {
      modal.style.display = "block";
      modal.getElementsByTagName("button")[0].id = button.id;
    };
  });

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // EDIT MODAL

  // Get the modal
  let edit_modal = document.getElementById("editTodoModal");

  // Get the <span> element that closes the modal
  let edit_span = document.getElementsByClassName("edit-close")[0];

  // When the user clicks on <span> (x), close the modal
  edit_span.onclick = function () {
    edit_modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == edit_modal) {
      edit_modal.style.display = "none";
    }
  };
};

export default insertModal;
