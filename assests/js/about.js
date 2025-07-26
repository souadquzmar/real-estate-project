const section = document.querySelector(".statistics");
const { CountUp } = window.countUp;
  const counterElement1 = document.getElementById("home-counter");
  const counterElement2 = document.getElementById("listing-counter");
  const counterElement3 = document.getElementById("users-counter");
  const counterElement4 = document.getElementById("awards-counter");
  const counter1 = new CountUp(counterElement1, 300, { duration: 3 });
  const counter2 = new CountUp(counterElement2, 400, { duration: 3 });
  const counter3 = new CountUp(counterElement3, 250, { duration: 3 });
  const counter4 = new CountUp(counterElement4, 200, { duration: 3 });
  let hasCounted = false; 

  function checkIfVisible() {
    
    const inView = window.scrollY > section.offsetTop-400;

    if (inView && !hasCounted) {
      counter1.start();
      counter2.start();
      counter3.start();
      counter4.start();
      hasCounted = true;
    }
  }
  window.addEventListener("scroll", checkIfVisible);
  window.addEventListener("load", checkIfVisible);


var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 7,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    690:{
      slidesPerView: 3
    },
    1033: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
  
  autoplay:{
    delay:2500
  }
});