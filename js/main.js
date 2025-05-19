document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 8,
    spaceBetween: 30,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320:  { slidesPerView: 2, spaceBetween: 10 },
      640:  { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
    },
  });
});
