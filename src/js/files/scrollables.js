import Scrollable from "../libs/Scrollable.js";

export default function scrollables() {
  new Scrollable(".services__nav", {
    wheelScrolling: true,
  });

  new Scrollable(".head-nav", {
    wheelScrolling: true,
  });

  if (window.matchMedia("(max-width:1365px)").matches) {
    new Scrollable(".menu__list", {
      wheelScrolling: true,
    });
  }
}
