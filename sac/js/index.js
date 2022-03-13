$(function(){
$(document).ready(function () {
  $('.news__contents').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "news-dots"
  });

  $('.events-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    prevArrow: $('.events-nav__btn--prev'),
    nextArrow: $('.events-nav__btn--next'),
    centerMode: true
  });

  $('.main-banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.banner-nav__menu',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.banner-nav__menu').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.main-banner__slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: $('.banner-nav__btn--prev'),
    nextArrow: $('.banner-nav__btn--next'),
    variableWidth: true,
    centerMode: true
  });
});

  $(".notice-btn").on("click", function(){
    $(".bulletin-board__notice").css({
      "z-index": "19"
    });
    $(".bulletin-board__ticket").css({
      "z-index": "10"
    });
    $(".more-btn").css({
      "background-color": "#3C386A"
    });
  });
  $(".ticket-btn").on("click", function(){
    $(".bulletin-board__notice").css({
      "z-index": "10"
    });
    $(".bulletin-board__ticket").css({
      "z-index": "19"
    });
    $(".more-btn").css({
      "background-color": "#647B69"
    });
  });
  
});



