import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
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

  const salonsSlider = document.querySelector(".salons__slider");

  if (salonsSlider) {
    const swiper = new Swiper(salonsSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".salons .slider-btn._prev",
        nextEl: ".salons .slider-btn._next",
      },
      breakpoints: {
        1365: {
          slidesPerView: 4,
        },
      },
    });
  }

  const portfolioSlider = document.querySelector(".portfolio__slider");

  if (portfolioSlider) {
    const swiper = new Swiper(portfolioSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: true,
      initialSlide: 3,
      grabCursor: true,
      // autoplay: {
      //   delay: 3500,
      // },
      navigation: {
        prevEl: ".portfolio .slider-btn._prev",
        nextEl: ".portfolio .slider-btn._next",
      },
    });
  }
}
