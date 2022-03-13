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
  $(".sub-menu-wrap:visible").hide();
});

$(".country .dropdown-content li").on("click", function () {
  $(".country span").html($(this).text());
});

$(".item-box>div").on("mouseenter", function(){
  $(this).children("a:nth-child(1)").children("img").hide();
});

$(".item-box>div").on("mouseleave", function(){
  $(this).children("a:nth-child(1)").children("img").show();
});



var itemCount = $(".item-container .item-box:last-of-type").index()+1;

$(".item-total span").text(itemCount);

$(window).bind('wheel', function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
     $("#header").stop().animate({
       "top":"0px"
     },100);
  } else {
       $("#header").stop().animate({
         "top":"-110px"
       },100);
  }
  $(".sub-menu-wrap:visible").hide();
});

$(document).on("scroll", function () {
  console.log($(document).scrollTop());
  if ($(document).scrollTop() >= 400) {
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
  if ($(document).scrollTop() < 400) {
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

$("a").on("click", function(e){
  var attrA = $(this).attr("href");
  if(attrA == "#") {
    e.preventDefault();
  }
});










});