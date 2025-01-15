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
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".portfolio .slider-btn._prev",
        nextEl: ".portfolio .slider-btn._next",
      },
    });
  }

  const mapsSliders = document.querySelectorAll(".maps__slider");

  if (mapsSliders.length) {
    mapsSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 1000,
        modules: [Autoplay, Navigation],
        spaceBetween: 16,
        grabCursor: true,
        autoplay: {
          delay: 3500,
        },
        navigation: {
          prevEl: slider
            .closest(".maps__wrapper-slider")
            .querySelector(".slider-btn._prev"),
          nextEl: slider
            .closest(".maps__wrapper-slider")
            .querySelector(".slider-btn._next"),
        },
      });
    });
  }

  const recSlider = document.querySelector(".rec__slider");

  if (recSlider) {
    const swiper = new Swiper(recSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".rec .slider-btn._prev",
        nextEl: ".rec .slider-btn._next",
      },
      breakpoints: {
        1111: {
          slidesPerView: 3,
        },
      },
    });
  }

  const socialSlider = document.querySelector(".social__slider");

  if (socialSlider) {
    const swiper = new Swiper(socialSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      spaceBetween: 16,
      grabCursor: true,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".social .slider-btn._prev",
        nextEl: ".social .slider-btn._next",
      },
      breakpoints: {
        744: {
          spaceBetween: 8,
        },
      },
    });
  }

  const videoAboutSlider = document.querySelector(".video-about__slider");

  if (videoAboutSlider) {
    const swiper = new Swiper(videoAboutSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation],
      slidesPerView: "auto",
      initialSlide: 2,
      spaceBetween: 16,
      grabCursor: true,
      centeredSlides: true,
      // autoplay: {
      //   delay: 3500,
      // },
      navigation: {
        prevEl: ".video-about .slider-btn._prev",
        nextEl: ".video-about .slider-btn._next",
      },
      breakpoints: {
        1360: {
          spaceBetween: 60,
          slidesPerView: 3,
          centeredSlides: false,
        },
        1024: {
          spaceBetween: 30,
          slidesPerView: 3,
          centeredSlides: false,
        },
        577: {
          slidesPerView: 2,
          initialSlide: 1,
          centeredSlides: false,
        },
      },
    });
  }
}
