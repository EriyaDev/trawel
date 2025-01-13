var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "my-custom-bullet-active",
      bulletClass: "my-custom-bullet",
    },
  });

  var swiper2 = new Swiper(".swiperPackage", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  setInterval(() => {
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    const featuredSwiper = document.getElementById("featuredSwiper");

    if (screenWidth >= 1280){
      swiper.passedParams.slidesPerView;
      console.log(swiper.passedParams.slidesPerView);

      swiper.params.slidesPerView = 5;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }
    else if (screenWidth >= 1024) {
      swiper.passedParams.slidesPerView;
      console.log(swiper.passedParams.slidesPerView);

      swiper.params.slidesPerView = 4;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }
    else if(screenWidth >= 768){
      swiper.params.slidesPerView = 3;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }else {
      swiper.params.slidesPerView = 2;
      console.log(swiper.params.slidesPerView);
      swiper.update();
    }
  }, 1000);


  setInterval(() => {
    var screenWidth = window.innerWidth;
    console.log(screenWidth);
    const featuredSwiper = document.getElementById("packageSwiper");

    if (screenWidth >= 1280) {
      swiper2.passedParams.slidesPerView;
      console.log(swiper2.passedParams.slidesPerView);

      swiper2.params.slidesPerView = 4;
      console.log(swiper2.params.slidesPerView);
      swiper2.update();
    }
    else if(screenWidth >= 1024){
      swiper2.params.slidesPerView = 3;
      console.log(swiper2.params.slidesPerView);
      swiper2.update();
    }
    else if(screenWidth >= 768){
      swiper2.params.slidesPerView = 2;
      console.log(swiper2.params.slidesPerView);
      swiper2.update();
    }else {
      swiper2.params.slidesPerView = 1;
      console.log(swiper2.params.slidesPerView);
      swiper2.update();
    }
  }, 1000);