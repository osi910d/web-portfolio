$(function () {
  $("#gnb>ul>li").on("mouseenter", function () {
    $(".sub-menu-wrap:visible").hide();
    $(this).children(".sub-menu-wrap").show();
    $(".dropdown-content:visible").hide();
  });

  $(".sub-menu-wrap").on("mouseleave", function () {
    $(".sub-menu-wrap:visible").hide();
  });

  $('html').on("click", function (e) {
    if ($(e.target).hasClass("dropbtn")) {
      $(".dropdown-content:visible").hide();
      $(e.target).next().slideDown();
      $(".sub-menu-wrap:visible").hide();
    } else {
      $(".dropdown-content:visible").hide();
    }
  });

  $(window).bind('wheel', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
       $("#header").stop().animate({
         "top":"0px"
       },200);
    } else {
      if ($(document).scrollTop() >= 600) {
         $("#header").stop().animate({
           "top":"-110px"
         },200);
      }
    }
    $(".sub-menu-wrap:visible").hide();
  });

  $(document).on("scroll", function () {
    if ($(document).scrollTop() >= 1000) {
      $("#header").css({
        "height": "30px",
        "flex-direction": "row"
      });
      $(".logo-util_area").css({
        "display": "none"
      });
      $(".sub-menu-wrap").css({
        "top":"22px"
      });
    }
    if ($(document).scrollTop() < 800) {
      $("#header").css({
        "height": "110px",
        "flex-direction": "column"
      });
      $(".logo-util_area").css({
        "display": "flex"
      });
      $(".sub-menu-wrap").css({
        "top":"27px"
      });
    }
    if ($(document).scrollTop() == 0) {
      $("#header").stop().animate({
        "top":"0px"
      },100);
    }
  });

  $(".country .dropdown-content li").on("click", function () {
    $(".country span").html($(this).text());
  });


  $("a").on("click", function(e){
    var attrA = $(this).attr("href");
    if(attrA == "#") {
      e.preventDefault();
    }
  });
















});