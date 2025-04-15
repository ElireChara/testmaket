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
  });

  document.querySelector(".prev-btn").addEventListener("click", () => {
    swiper.slidePrev();
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    swiper.slideNext();
  });