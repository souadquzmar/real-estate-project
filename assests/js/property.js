const swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

  const input = document.getElementById('counter-input');
  const decrement = document.querySelector('.decrement');
  const increment = document.querySelector('.increment');

  const input2 = document.getElementById('counter-input2');
  const decrement2 = document.querySelector('.decrement2');
  const increment2 = document.querySelector('.increment2');

 function sanitize(value) {
    const number = parseInt(value);
    return isNaN(number) ? 0 : number;
  }

  decrement.addEventListener('click', () => {
    input.value = sanitize(input.value) - 1;
  });

  increment.addEventListener('click', () => {
    input.value = sanitize(input.value) + 1;
  });
  decrement2.addEventListener('click', () => {
    input2.value = sanitize(input2.value) - 1;
  });

  increment2.addEventListener('click', () => {
    input2.value = sanitize(input2.value) + 1;
  });