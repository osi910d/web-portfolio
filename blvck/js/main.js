$(document).ready(function () {
  $('.new-item-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 800
  });

  $('.best-item-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: $('.b-arr-p'),
    nextArrow: $('.b-arr-n'),
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 800
  });

  $('.white-item-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    prevArrow: $('.w-arr-p'),
    nextArrow: $('.w-arr-n'),
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 800
  });

  $('.sns-slider').slick({
    slidesToShow: 5,
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    autoplaySpeed: 700
  });

  $('.updown-btn-wrap>div').on('mouseover', function () {
    $(this).children().css({
      'border-color': '#000'
    });
  });

  $('.updown-btn-wrap>div').on('mouseleave', function () {
    $(this).children().css({
      'border-color': '#fff'
    });
  });

  $(document).on("scroll", function () {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() >= 200) {
      $(".brand-box").slideDown(2000);
      $(".brand-banner>a:nth-child(1)").addClass("animate__fadeOut");
    }
    
    if ($(document).scrollTop() >= 900) {
      $(".updown-btn-wrap").css({
        "display": "block"
      });
    } else {
      $(".updown-btn-wrap").css({
        "display": "none"
      });
    }

    if ($(document).scrollTop() >= 3300) {
      $(".white-box>img").css({
        "display":"inline-block"
      }).addClass("animate__fadeInDown")
      $(".white-box>p").addClass("animate__fadeInDown").show();
      $(".white-box>a").addClass("animate__fadeInDown").show();
    }
    
    if ($(document).scrollTop() >= 4600) {
      $(".acc-black-bear").addClass("animate__fadeInDown").show();
      $(".acc-white-bear").addClass("animate__fadeInDown").show();
      $(".acc-tumbler").addClass("animate__fadeInDown").show();
      $(".acc-wallet").addClass("animate__fadeInDown").show();
      $(".acc-bag").addClass("animate__fadeInDown").show();
      $(".acc-text-container>h3").addClass("animate__fadeInUp").show();
      $(".acc-text-container>p").addClass("animate__fadeInUp").show();
      $(".acc-text-container>a").addClass("animate__fadeInUp").show();
    }
    
    if ($(document).scrollTop() >= 6500) {
      $(".w-con1>img:nth-child(2)").animate({
        "margin-top": "60px"
      });
      $(".w-con1>img:nth-child(3)").animate({
        "margin-top": "30px"
      });
      $(".w-con1>img:nth-child(4)").animate({
        "margin-top": "0px"
      });
      $(".w-con2>img:nth-child(2)").animate({
        "margin-top": "20px",
        "margin-bottom": "40px"
      });
      $(".w-con2>img:nth-child(3)").animate({
        "margin-top": "40px",
        "margin-bottom": "20px"
      });
      $(".w-con2>img:nth-child(4)").animate({
        "margin-top": "60px",
        "margin-bottom": "0px"
      });
      $(".w-title>h2").addClass("animate__slideInRight").show();

      if ($(document).scrollTop() >= 7290) {
        $(".sns-link>a").addClass("animate__flipInX").show();
      }
    }
  });

  $(".up-btn").on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 400);
  });

  $(".down-btn").on("click", function () {
    $("html,body").animate({
      scrollTop: 8912
    }, 400);
  });

  $(window).load(function(){
    $(".main-banner-contents").fadeIn(2000);
  });












});