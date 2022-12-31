var carouseService = new Swiper(".carousel-service", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: { duration: 8000 },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var carouselAdventage = new Swiper(".carousel-adventage", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: { duration: 8000 },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var carouselProduct = new Swiper(".carousel-product", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var carouselTenant = new Swiper(".carousel-tenant", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: { duration: 8000 },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var carouselDepartment = new Swiper(".carousel-department", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var carouselFacilities = new Swiper(".carousel-facilities", {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var carouselVideo = new Swiper(".carousel-video", {
  effect: "cards",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
var carouselNewsUpdate = new Swiper(".carousel-news", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
