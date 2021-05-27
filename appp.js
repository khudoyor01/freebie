var autoplay = 5000;
let swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,

  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".slider",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    }
   ,
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    
  },
});
