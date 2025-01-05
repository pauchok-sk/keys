export default function tab() {
  const buttonsTab = document.querySelectorAll("[data-tab-btn]");
  const tabs = document.querySelectorAll("[data-tab]");

  if (tabs.length) {
    buttonsTab.forEach(btn => {
      btn.addEventListener("click", () => {
        const idTab = btn.dataset.tabBtn;
        const parent = btn.closest(".tab-container");
        const currentTab = parent.querySelector(`[data-tab="${idTab}"]`);

        tabs.forEach(t => t.classList.remove("_open"));
        buttonsTab.forEach(b => b.classList.remove("_active"));

        currentTab.classList.add("_open");
        btn.classList.add("_active");
      })
    })
  }
}