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


  // const secondSwiper = new Swiper(".secondSwiper", {
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,}

  // });

  // document.querySelector(".prev-btn2").addEventListener("click", () => {
  //   swiper.slidePrev();
  // });

  // document.querySelector(".next-btn2").addEventListener("click", () => {
  //   swiper.slideNext();
  // });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();
  
    const phonePattern = /^\+7\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  
    if (name.length < 2) {
      alert("Введите корректное имя (минимум 2 символа)");
      return;
    }
  
    if (!phonePattern.test(phone)) {
      alert("Введите корректный номер телефона в формате +7 (___) ___-__-__");
      return;
    }
  
    if (message.length < 5) {
      alert("Пожалуйста, введите сообщение (минимум 5 символов)");
      return;
    }
  
    alert("Форма успешно отправлена!");
    this.reset();
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    if (typeof ymaps !== 'undefined') {
        initMap();
    } else {
        console.error('Yandex Maps API не загрузился');
    }
});

function initMap() {
    ymaps.ready(function() {
        var myMap = new ymaps.Map("map", {
            center: [44.624700, 40.118994],
            zoom: 16
        });
        
        var myPlacemark = new ymaps.Placemark([44.624700, 40.118994], {
          hintContent: 'Красная метка',
          balloonContent: 'Это красная метка на карте'
      }, {
          preset: 'islands#redIcon' 
      });
        
        myMap.geoObjects.add(myPlacemark);
    });
}