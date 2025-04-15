import './assets/styles/main.scss';
import Swiper, {navigation}  from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

const swiper = new Swiper('.sample-slider', {   
    navigation: {                      
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})