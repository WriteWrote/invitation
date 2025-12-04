import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500, // 2.5 секунды между переключениями
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      // для ширины экрана 0px и больше
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      // для планшетов и выше
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      // для десктопа
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
