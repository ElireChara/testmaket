import './assets/styles/main.scss';
import Swiper, {navigation}  from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // Кастомная навигация
  document.querySelector(".prev-btn").addEventListener("click", () => {
    swiper.slidePrev();
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    swiper.slideNext();
  });