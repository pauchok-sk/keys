import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const servicesSliders = document.querySelectorAll(".services__slider");

  if (servicesSliders.length) {
    servicesSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        modules: [Autoplay],
        slidesPerView: "auto",
        grabCursor: true,
        grabCursor: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          1365: {
            slidesPerView: 4,
          },
        },
      });
    });
  }
}
