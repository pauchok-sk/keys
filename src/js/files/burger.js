export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burger = document.querySelector("#burger");
  const headerList = document.querySelector(".header__list");
  const headerInst = document.querySelector(".header__inst");
  const servicesBtn = burger.querySelector("#services-open");
  const sectionsBtn = burger.querySelector("#sections-open");
  const services = burger.querySelector("#services");
  const sections = burger.querySelector("#sections");

  if (burger) {
    headerInst.style.display = "none";

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (burger.classList.contains("_open")) {
        closeBurger();
      } else {
        openBurger();
      }
    });

    function openBurger() {
      burger.classList.add("_open");
      burgerBtn.classList.add("_active");
      document.body.classList.add("body-hidden");

      if (window.matchMedia("(min-width:1024px)").matches) {
        headerList.classList.add("_hidden");
        headerList.style.display = "none";
        headerInst.style.display = "flex";

        setTimeout(() => {
          headerInst.classList.add("_active");
        }, 200);
      }

      burger.addEventListener("click", (e) => e.stopPropagation());
      document.body.addEventListener("click", closeBurger);
    }

    function closeBurger() {
      burger.classList.remove("_open");
      burgerBtn.classList.remove("_active");

      document.body.classList.remove("body-hidden");
      if (window.matchMedia("(min-width:1025px)").matches) {
        headerInst.classList.remove("_active");
        headerList.style.display = "flex";
        headerInst.style.display = "none";

        setTimeout(() => {
          headerList.classList.remove("_hidden");
        }, 200);
      }

      document.body.removeEventListener("click", closeBurger);
    }

    servicesBtn.addEventListener("click", () => {
      services.style.display = "block";
      sections.style.display = "none";
    })
    sectionsBtn.addEventListener("click", () => {
      services.style.display = "none";
      sections.style.display = "block";
    })
  }
}
