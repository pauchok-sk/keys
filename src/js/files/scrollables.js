import Scrollable from "../libs/Scrollable.js";

export default function scrollables() {
  new Scrollable(".services__nav", {
    wheelScrolling: true,
  });

  new Scrollable(".price__head", {
    wheelScrolling: true,
  });

  new Scrollable(".our-works__head", {
    wheelScrolling: true,
  });
}
