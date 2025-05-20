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

// document.addEventListener('DOMContentLoaded', () => {
//   new Swiper('.swiper-cursos', {
//     wrapperClass:   'swiper-wrapper-cursos',
//     slideClass:     'swiper-slide-cursos',
//     loop:           true,

//       freeMode: {
//       enabled: true,
//       sticky:  true,
//       momentum: true,      
//     },

//     slidesPerView:  6,
//     spaceBetween:   10,
//     speed:          9000,
//     autoplay: {
//       delay:             10,
//       disableOnInteraction: false,
//       waitForTransition: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//       320:  { slidesPerView: 2, spaceBetween: 10 },
//       640:  { slidesPerView: 4, spaceBetween: 15 },
//       1024: { slidesPerView: 6, spaceBetween: 20 },
//     },
//   });
// });

const inputs = document.querySelectorAll(".formulario input");

inputs.forEach(input => {
    input.addEventListener("blur", function () {
        if (input.value.trim() === "") {
            input.classList.add("erro");
        } else {
            input.classList.remove("erro");
        }
    });
});

const input2 = document.querySelectorAll(".f-newsletter input");

input2.forEach(input => {
    input.addEventListener("blur", function () {
        if (input.value.trim() === "") {
            input.classList.add("borda");
        } else {
            input.classList.remove("borda");
        }
    });
});


