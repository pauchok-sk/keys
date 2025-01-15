export default function formSelect() {
  const selectButtons = document.querySelectorAll(".form__select-btn");

  selectButtons.forEach((btn) => {
    const parent = btn.closest(".form__item");
    const selectList = parent.querySelector(".form__select-list");
    const currentInput = parent.querySelector(".input");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (parent.classList.contains("_select-open")) {
        handleClose();
      } else {
        handleOpen();
      }
    });

    function change(e) {
      console.log("change");
      currentInput.value = e.target.textContent;
      
      handleClose();
    }

    function handleClose() {
      parent.classList.remove("_select-open");
    }
    function handleOpen() {
      parent.classList.add("_select-open");

      selectList.addEventListener("click", change)
    }
  });
}
