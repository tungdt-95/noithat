// <!-- -----------------Menu_mb---------------- -->

$(document).ready(function () {
    $(".icon_mb").click(function () {
        $(".menu").slideToggle();
    })                                                    
    });
    if ($(window).width() < 800) {

      $(".arrow_icon").click(function () {
          $(".menu_child").slideToggle();
      })   
    
    
      $(".search_icon").click(function () {
          $("input").slideToggle();
      })          
    }  
   
// swiper slide
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
     375: {
       slidesPerView: 1,
     },
     1024: {
       slidesPerView: 1,
     },
   },
  });

  var swiper = new Swiper(".mySwiper_blog", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
     375: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 24,
     },
   },
  });

  