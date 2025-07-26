var typed = new Typed("#typed-text", {
  strings: ["Plaza^2500", "House^2500", "Apartment^2500"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
});

const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    690: {
      slidesPerView: 2,
    },
    1033: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,

  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    690: {
      slidesPerView: 2,
    },
    1033: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },
});

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 7,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    690: {
      slidesPerView: 3,
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

  autoplay: {
    delay: 2500,
  },
});

document.querySelector(".advanced").addEventListener("click", (e) => {
  e.preventDefault();
  const modal = document.querySelector(".my-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
  } else {
    modal.classList.add("show");
  }
});

document.querySelector(".advanced-rent").addEventListener("click", (e) => {
  e.preventDefault();
  const modal = document.querySelector(".my-modal2");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
  } else {
    modal.classList.add("show");
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const main = document.querySelector(".main");
  const img = document.querySelector(".img");
  if (window.scrollY > main.offsetTop - navbar.offsetTop) {
    navbar.classList.add("nav2");
    img.setAttribute("src", "./assests/img/navbar/logo-red.svg");
  } else {
    navbar.classList.remove("nav2");
    img.setAttribute("src", "./assests/img/navbar/logo-white-1.svg");
  }
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  const places = document.querySelectorAll(".up");
  places.forEach((place) => {
    const top = place.getBoundingClientRect().top;

    if (top < triggerBottom) {
      place.classList.add("animate1");
    }
  });
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  const places = document.querySelectorAll(".left");
  places.forEach((place) => {
    const top = place.getBoundingClientRect().top;

    if (top < triggerBottom) {
      place.classList.add("animate2");
    }
  });
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  const places = document.querySelectorAll(".right");
  places.forEach((place) => {
    const top = place.getBoundingClientRect().top;

    if (top < triggerBottom) {
      place.classList.add("animate3");
    }
  });
});

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  const places = document.querySelectorAll(".scale");
  places.forEach((place) => {
    const top = place.getBoundingClientRect().top;

    if (top < triggerBottom) {
      place.classList.add("animate4");
    }
  });
});
