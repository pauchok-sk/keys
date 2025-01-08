export default function removes() {
  const buttonsRemove = document.querySelectorAll(".btn-remove");

  if (buttonsRemove.length) {
    buttonsRemove.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".remove");

        parent.remove();
      })
    })
  }
}